---
name: revisao-de-pr
description: Revisa pull request dos repos da Drap com o checklist da casa, segurança primeiro. Só para código.
---

# Revisão de PR — checklist da Drap

Ordem fixa: segurança → correção → clareza. Não inverta — estilo nunca
bloqueia PR, segurança sempre bloqueia.

## 1. Segurança (bloqueia)

- Segredo/credencial no diff? (chave, token, senha, URL com auth)
- Entrada de usuário chega em query/SQL/comando/HTML sem tratamento?
- Dependência nova? Se sim: precisa mesmo? mantida? licença ok?
- Permissão/escopo ampliado em API, IAM ou config?

## 2. Correção (bloqueia)

- O diff faz o que o PR diz? Nada além (mudança contrabandeada)?
- Caminho de erro tratado — ou só o caminho feliz?
- Teste cobre o comportamento novo? Rodou?

## 3. Clareza (comenta, não bloqueia)

- Nome diz o que a coisa é? Função cabe na cabeça?
- Comentário explica o PORQUÊ (não o quê)?

## Regras da casa

- `<preencher: convenções específicas da Drap — lint, padrão de branch,
  formato de commit — o que o time já combinou>`
- Veredito em 3 linhas no topo do review: aprova / pede mudança / bloqueia,
  e por quê. Merge em main NUNCA é seu — aprovação do dono.
