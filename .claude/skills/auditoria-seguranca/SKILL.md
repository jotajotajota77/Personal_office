---
name: auditoria-seguranca
description: Roda a varredura periódica de segurança dos repos da Drap (dependências, segredos, permissões) e produz o relatório no formato da casa.
---

# Auditoria de segurança — varredura periódica da Drap

## Escopo da varredura

Repos cobertos: `<preencher: lista dos repos da Drap>`

1. **Dependências** — vulnerabilidade conhecida (`npm audit` ou equivalente
   do stack), versão abandonada, dependência que ninguém lembra por quê.
2. **Segredos** — busca por padrão de chave/token no histórico recente e em
   arquivos de config; `.env` fora do gitignore.
3. **Permissões** — colaboradores e tokens com acesso além do necessário;
   branch protection de main ligada?
4. **Exposição** — porta/endpoint público que não devia; CORS aberto; admin
   sem auth.

## Formato do relatório

Uma tabela: `| achado | repo | gravidade (alta/média/baixa) | ação sugerida |`
— ordenada por gravidade. Sem achado = relatório mesmo assim ("nada
encontrado em <data>"), porque silêncio não é evidência.

## Regras

- Achado de gravidade ALTA: além do relatório, tarefa imediata no
  `escritorio/plano.md` para a Vega e aviso ao dono na conversa.
- CORRIGIR o achado é outra tarefa (com PR, review, aprovação) — a
  auditoria só encontra e reporta.
- Relatório vai para o Drive ou para `escritorio/` (sem segredo no texto!);
  linha em `escritorio/entregas.md`.
