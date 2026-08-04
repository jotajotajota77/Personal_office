#!/usr/bin/env python3
"""Converte o manuscrito markdown em PDF legível para reunião."""
import re, sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                Spacer, Table, TableStyle, KeepTogether)

FDIR = "/usr/share/fonts/truetype/liberation"
for nome, arq in [("LSerif", "LiberationSerif-Regular"), ("LSerif-B", "LiberationSerif-Bold"),
                  ("LSerif-I", "LiberationSerif-Italic"), ("LSerif-BI", "LiberationSerif-BoldItalic")]:
    pdfmetrics.registerFont(TTFont(nome, f"{FDIR}/{arq}.ttf"))
pdfmetrics.registerFontFamily("LSerif", normal="LSerif", bold="LSerif-B",
                              italic="LSerif-I", boldItalic="LSerif-BI")

CORPO = ParagraphStyle("corpo", fontName="LSerif", fontSize=10.5, leading=15.5,
                       alignment=TA_JUSTIFY, spaceAfter=7)
H1 = ParagraphStyle("h1", parent=CORPO, fontName="LSerif-B", fontSize=15, leading=19,
                    spaceBefore=16, spaceAfter=9, alignment=0, textColor=colors.HexColor("#111111"))
H2 = ParagraphStyle("h2", parent=H1, fontSize=12.5, leading=16, spaceBefore=13, spaceAfter=6)
H3 = ParagraphStyle("h3", parent=H1, fontSize=11, leading=14, spaceBefore=10, spaceAfter=5,
                    textColor=colors.HexColor("#333333"))
CAPA = ParagraphStyle("capa", parent=CORPO, alignment=0, spaceAfter=4)
NOTA = ParagraphStyle("nota", parent=CORPO, fontSize=9, leading=12.5, alignment=0,
                      leftIndent=7, rightIndent=7, spaceBefore=5, spaceAfter=5,
                      borderPadding=6, borderWidth=0.7, borderColor=colors.HexColor("#C77700"),
                      backColor=colors.HexColor("#FFF6E6"), textColor=colors.HexColor("#5A3A00"))
CELA = ParagraphStyle("cela", fontName="LSerif", fontSize=8, leading=10.5)
CELA_H = ParagraphStyle("celah", parent=CELA, fontName="LSerif-B")


def inline(s):
    """markdown/HTML inline -> markup do reportlab, com escape correto."""
    s = s.replace("\\*", "\x00AST\x00").replace("\\_", "\x00UND\x00")
    # protege as unicas tags HTML que existem no documento
    s = re.sub(r"<sup>", "\x00SUP\x00", s, flags=re.I)
    s = re.sub(r"</sup>", "\x00/SUP\x00", s, flags=re.I)
    s = re.sub(r"<sub>", "\x00SUB\x00", s, flags=re.I)
    s = re.sub(r"</sub>", "\x00/SUB\x00", s, flags=re.I)
    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    s = (s.replace("\x00SUP\x00", "<super>").replace("\x00/SUP\x00", "</super>")
          .replace("\x00SUB\x00", "<sub>").replace("\x00/SUB\x00", "</sub>"))
    # marcadores que travam humano: impossivel de nao ver
    s = re.sub(r"\[\[FALTA:\s*(.+?)\]\]",
               r'<font backColor="#FFE0E0" color="#9B0000"><b>[FALTA: \1]</b></font>',
               s, flags=re.S)
    s = re.sub(r"\[\[SEM FONTE:\s*(.+?)\]\]",
               r'<font backColor="#FFE0E0" color="#9B0000"><b>[SEM FONTE: \1]</b></font>',
               s, flags=re.S)
    # bold-italico primeiro, senao as duas regras seguintes cruzam o aninhamento
    s = re.sub(r"\*\*\*(.+?)\*\*\*", r"<b><i>\1</i></b>", s, flags=re.S)
    s = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s, flags=re.S)
    s = re.sub(r"(?<![\w*])\*(?!\s)([^*]+?)(?<!\s)\*(?![\w*])", r"<i>\1</i>", s, flags=re.S)
    s = re.sub(r"`(.+?)`", r'<font face="Courier" size="9">\1</font>', s, flags=re.S)
    return s.replace("\x00AST\x00", "*").replace("\x00UND\x00", "_")


def monta(md):
    linhas = md.split("\n")
    hist, i = [], 0
    while i < len(linhas):
        ln = linhas[i]
        st = ln.strip()

        # comentario HTML -> caixa de decisao, visivel
        if "<!--" in ln:
            bloco = []
            while i < len(linhas) and "-->" not in linhas[i]:
                bloco.append(linhas[i]); i += 1
            if i < len(linhas): bloco.append(linhas[i]); i += 1
            txt = re.sub(r"<!--|-->", "", "\n".join(bloco)).strip()
            txt = re.sub(r"\s*\n\s*", " ", txt)
            hist.append(Paragraph("&#9998; " + inline(txt), NOTA))
            continue

        if not st or st == "---":
            i += 1
            continue

        # tabela
        if st.startswith("|"):
            linhas_tab = []
            while i < len(linhas) and linhas[i].strip().startswith("|"):
                linhas_tab.append(linhas[i].strip()); i += 1
            dados = []
            for r in linhas_tab:
                cels = [c.strip() for c in r.strip("|").split("|")]
                if all(re.fullmatch(r":?-{2,}:?", c or "-") for c in cels):
                    continue
                dados.append(cels)
            if dados:
                ncol = max(len(r) for r in dados)
                dados = [r + [""] * (ncol - len(r)) for r in dados]
                larg = (A4[0] - 40 * mm) / ncol
                corpo_tab = [[Paragraph(inline(c), CELA_H if k == 0 else CELA) for c in r]
                             for k, r in enumerate(dados)]
                t = Table(corpo_tab, colWidths=[larg] * ncol, repeatRows=1)
                t.setStyle(TableStyle([
                    ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#BBBBBB")),
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#EFEFEF")),
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 4),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                    ("TOPPADDING", (0, 0), (-1, -1), 3),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ]))
                hist.append(Spacer(1, 5)); hist.append(t); hist.append(Spacer(1, 9))
            continue

        # titulos
        m = re.match(r"^(#{1,4})\s+(.*)$", st)
        if m:
            nivel, txt = len(m.group(1)), inline(m.group(2))
            hist.append(Paragraph(txt, {1: H1, 2: H2, 3: H3}.get(nivel, H3)))
            i += 1
            continue

        # paragrafo: junta linhas ate a proxima quebra estrutural
        bloco = []
        while i < len(linhas):
            c = linhas[i].strip()
            if (not c or c.startswith("|") or c.startswith("#")
                    or c == "---" or "<!--" in linhas[i]):
                break
            bloco.append(c); i += 1
        if bloco:
            texto = " ".join(bloco)
            estilo = CAPA if re.match(r"^\*\*[^*]+:?\*\*", texto) and len(texto) < 220 else CORPO
            hist.append(Paragraph(inline(texto), estilo))
    return hist


def rodape(canv, doc):
    canv.saveState()
    canv.setFont("LSerif", 8)
    canv.setFillColor(colors.HexColor("#777777"))
    canv.drawString(20 * mm, 12 * mm, "JRAAS-2026-0085 — manuscrito v4 (rascunho de ressubmissão)")
    canv.drawRightString(A4[0] - 20 * mm, 12 * mm, str(canv.getPageNumber()))
    canv.restoreState()


def main(entrada, saida):
    md = open(entrada).read()
    doc = BaseDocTemplate(saida, pagesize=A4,
                          leftMargin=20 * mm, rightMargin=20 * mm,
                          topMargin=18 * mm, bottomMargin=20 * mm,
                          title="JRAAS-2026-0085 — manuscrito v4",
                          author="Castro, Teles, Santos, Dutra")
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="f")
    doc.addPageTemplates([PageTemplate(id="p", frames=[frame], onPage=rodape)])
    doc.build(monta(md))
    print("ok:", saida)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
