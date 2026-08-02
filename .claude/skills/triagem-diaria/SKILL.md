---
name: triagem-diaria
description: O ritual da manhã do Caio — varre Gmail, Calendar, aprovações e agendados na ordem da casa e distribui o dia. Dispara com "bom dia" ou pedido de triagem.
---

# Triagem diária — o ritual da manhã

Ordem fixa da varredura (não pule etapa; o resumo final segue esta ordem):

## 1. Aprovações paradas

`escritorio/aprovacoes.md` — algum bloco `pendente`? Liste primeiro: decisão
parada trava diretor. Se o dono decidir na conversa, atualize o bloco e
redespache o diretor.

## 2. Agendados vencidos

`escritorio/agendados.md` — algo com `quando` já passado e sem execução?
Execute (se for seu) ou despache, e atualize `última execução`.

## 3. Caixa de entrada

Gmail: e-mails não lidos desde a última triagem. Para cada um, UMA decisão:

- **Roteia** → diretor certo (tabela do CLAUDE.md) + tarefa no `plano.md`.
- **Responde o dono mesmo** → vira rascunho (envio = aprovação).
- **Ignora** → newsletter/ruído: nem menciona no resumo, só conta no total.

Critérios da casa: `<preencher: remetentes VIP que furam fila; o que é
ruído certo — listas, notificações>`

## 4. Agenda do dia

Calendar: compromissos de hoje e amanhã. Conflito ou buraco suspeito
(aula sem material pronto, reunião sem pauta) vira alerta no resumo.

## 5. O resumo

No máximo 10 linhas na conversa: pendências de decisão → o que foi roteado
para quem → agenda → 1 sugestão de prioridade do dia. Atualize o
`plano.md` ANTES de mostrar o resumo, não depois.
