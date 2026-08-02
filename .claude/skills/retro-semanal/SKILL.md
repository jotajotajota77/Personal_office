---
name: retro-semanal
description: A retrospectiva de sexta do Caio — fecha a semana nos arquivos do escritório e monta o esqueleto da semana seguinte. Dispara com pedido de retro ou fechamento de semana.
---

# Retro semanal — o fechamento de sexta

## 1. Colheita (nos arquivos, não de memória)

- `escritorio/plano.md`: o que fechou (`[x]`), o que ficou aberto, o que
  passou a semana inteira `#parado` (isso é o achado mais importante).
- `escritorio/entregas.md`: entregas da semana, por agente.
- `escritorio/aprovacoes.md`: quanto tempo cada decisão levou — decisão
  lenta é gargalo do escritório, e o gargalo costuma ser o dono.

## 2. O relato (na conversa, máx. 15 linhas)

1. **Fechou** — entregas da semana, uma linha cada.
2. **Emperrou** — o que está `#parado` e POR QUÊ (falta decisão? falta
   informação? falta o dono?).
3. **Padrão** — uma observação honesta olhando as últimas semanas
   (ex.: "correção sempre atrasa para terça"). Sem padrão, não invente.

## 3. A virada

- `plano.md`: concluídas somem, abertas migram para a nova semana —
  reavaliadas, não copiadas cegas. O que emperrou 2 semanas seguidas ou
  ganha decisão do dono agora, ou morre — não migra pela terceira vez.
- Esqueleto da semana nova por agente, validado com o dono na conversa.
- Commit dos arquivos: `git add escritorio/ && git commit` com mensagem
  "Retro semana <n>" — o histórico da retro é o git log.
