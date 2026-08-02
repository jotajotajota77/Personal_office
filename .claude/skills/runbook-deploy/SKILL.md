---
name: runbook-deploy
description: Executa deploy dos projetos da Drap pelos passos exatos do runbook, com rollback documentado. Só roda após aprovação registrada.
---

# Runbook de deploy — Drap

> **GATE**: nenhum passo deste runbook roda sem um bloco APROVADO em
> `escritorio/aprovacoes.md`. Sem aprovação registrada, o trabalho aqui é
> só PREPARAR o pedido de aprovação (o que vai mudar, risco, rollback).

## Projetos

### `<preencher: nome do projeto 1>`

- Onde roda: `<preencher: Railway? Vercel? VPS?>`
- Deploy: `<preencher: passos exatos, comando a comando>`
- Verificação pós-deploy: `<preencher: o que olhar para saber que subiu bem>`
- **Rollback**: `<preencher: passos exatos — sem rollback escrito, não há deploy>`

### `<preencher: projeto 2 — repetir o bloco>`

## Regras fixas

- Deploy sexta depois das 16h: não. Emergência é exceção que o dono aprova.
- Toda execução termina com uma linha em `escritorio/entregas.md`:
  "Deploy <projeto> <versão>" + link do commit/PR.
- Deu errado → rollback PRIMEIRO, investigação depois. Registrar o incidente
  em `escritorio/plano.md` como tarefa da Vega.
