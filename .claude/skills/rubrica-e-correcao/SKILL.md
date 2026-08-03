---
name: rubrica-e-correcao
description: Corrige entregas de alunos com a rubrica da casa e escreve feedback no tom padrão do professor. Só para docência.
---

# Rubrica e correção — o jeito da casa

> **PLACEHOLDERS**: `<preencher>` = conhecimento que só o dono tem. Antes da
> primeira correção real, pergunte — não invente critério de nota.
>
> O que **não** está como `<preencher>` abaixo vem do Regulamento Geral da
> Graduação da UEG (Resolução CsU nº 1.164/2024), indexado em
> `escritorio/referencias/ueg-regulamento-graduacao-2024-indice.md`. Isso não se
> negocia com o dono nem com o aluno: é norma da instituição, com o artigo
> citado ao lado. Para citar artigo em processo, confira o PDF oficial do SEI.

## O que a norma fixa (não invente, não altere)

**Escala:** zero a dez, **duas casas decimais, SEM ARREDONDAMENTO** (Art. 68
§2º). 5,99 é 5,99 e reprova. Nunca "arredonde para ajudar".

**Média semestral — a fórmula é institucional** (Art. 68 §5º):

```
MS = [ (nota da 1ª VA × 2) + (nota da 2ª VA × 3) ] ÷ 5
```

A 2ª VA pesa mais que a 1ª, e **isso não é escolha do professor**. Se um plano
de ensino disser peso diferente, o plano está errado, não a fórmula.

**Aprovação** exige as duas coisas juntas (Art. 68):

- média semestral **≥ 6,0**, e
- frequência **≥ 75%** das aulas ministradas.

Atingidos 25% de faltas, a reprovação está selada — o aluno **ainda pode fazer
as avaliações**, mas a condição não muda (Art. 63 §5º). Não prometa o contrário.

**Estrutura das VA** (Art. 64): mínimo de **2 VA por semestre**; cada VA com
**pelo menos 2 instrumentos distintos**; **pelo menos um instrumento escrito**.

**Três proibições que pegam na prática:**

- Nova VA **antes** de divulgar a nota da anterior: vedado (Art. 64, IV).
- Instrumento corrigido **volta para o aluno**, no ato da divulgação e dentro do
  semestre (Art. 64, III).
- Lançar nota e frequência no sistema **até o dia 10 do mês seguinte** à
  aplicação (Art. 64, V).

**Não existe recuperação** para curso presencial neste regulamento. A única
menção a estratégia de recuperação está nas normas específicas de EaD (Art. 65
§6º). Se pedirem "prova de recuperação", avise que a norma não prevê e pergunte
o que se quer de fato.

## Rubrica padrão

A rubrica tem de existir **antes** da avaliação, não durante a correção: o
regulamento exige critérios claros e comunicados desde o início (Art. 62, VI) e
que a revisão de prova se apoie em rubricas já definidas (Art. 67 §3º, II).

| Critério | Peso | O que separa bom de ruim |
| --- | --- | --- |
| `<preencher: critério 1>` | `<peso>` | `<preencher>` |
| `<preencher: critério 2>` | `<peso>` | `<preencher>` |
| `<preencher: critério 3>` | `<peso>` | `<preencher>` |

Os pesos **dentro** da rubrica são do dono; o peso **entre** 1ª e 2ª VA é da
norma (2 e 3). A soma dos critérios fecha a nota daquele instrumento, de 0 a 10.

## Tom do feedback (regras fixas)

- Sempre começa pelo que o aluno acertou — específico, não genérico.
- Aponta no máximo 3 melhorias por entrega, cada uma com o caminho ("faltou
  X; olhe o material Y"), nunca só o defeito.
- Nunca compara aluno com aluno. Nunca ironiza.
- Fecha com o próximo passo concreto.

## Fluxo

1. Entregas chegam por `<preencher: portal? e-mail? pasta do Drive?>`.
2. Corrigir aplicando a rubrica; anotar nota e feedback numa planilha na pasta
   da Lina no Drive (id em `escritorio/drive.md`, use como `parentId`) —
   **nota NUNCA entra no repo**.
3. Devolver o instrumento corrigido ao aluno junto com o resultado (Art. 64,
   III) e lançar no sistema até o dia 10 do mês seguinte (Art. 64, V).
4. Feedback individual vira rascunho de e-mail (não enviar — aprovação).
5. Registrar em `escritorio/entregas.md`: "Correção da turma X" + link da
   planilha.

## Se o aluno pedir revisão de prova (Art. 67)

Prazo do aluno: **7 dias corridos após a publicação da nota**, por requerimento
**na secretaria** — não com o professor. Prazo do professor: revisar em **até 7
dias** após o requerimento. Revisa-se **só nota** (§4º). O regulamento manda
revisar **sem saber de quem é a prova** (§3º, III). Discordando o aluno, o
coordenador setorial monta **banca de 3 docentes**, ele incluído (§7º).

**Segunda chamada** (Art. 66) é só para **prova**, requerida na secretaria em 7
dias corridos, e é **indeferida se a frequência for menor que 75%** (§8º). O
professor **não pode aplicar sem o protocolo** (§6º).

Mudança de critério de avaliação **já divulgado** exige aprovação do dono —
bloco em `escritorio/aprovacoes.md`, e PARE.
