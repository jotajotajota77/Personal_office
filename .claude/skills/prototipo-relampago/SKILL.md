---
name: prototipo-relampago
description: Faz spike com timebox no formato da casa — protótipo descartável em prototipos/ que prova ou mata uma ideia, mais um 1-pager de conclusão.
---

# Protótipo-relâmpago — o formato de spike da casa

## Antes de escrever código

Escrever em uma frase: **"Este protótipo existe para descobrir se ___."**
Se não couber numa frase, a pergunta está grande demais — quebre.

## Regras do jogo

- Timebox padrão: `<preencher: meio dia? um dia?>` — estourou, para e
  reporta o que aprendeu; spike não vira épico.
- Tudo vive em `prototipos/<nome-curto>/` DESTE repo. Fora daí, nada.
- Código descartável DE PROPÓSITO: sem teste, sem tratamento de erro, sem
  polimento. A vergonha é gastar capricho em rascunho, não o contrário.
- Produção, repo de cliente e o app dormente: intocáveis.

## Entregável (os dois, sempre)

1. O protótipo em `prototipos/<nome>/` — rodável ou visível.
2. `prototipos/<nome>/CONCLUSAO.md`, 1 página: a pergunta; o que foi feito;
   **funcionou? sim/não/depende**; o que custaria fazer de verdade;
   recomendação (seguir / matar / mudar a pergunta).

Linha em `escritorio/entregas.md` com link para a CONCLUSAO. Promover
protótipo a projeto real = aprovação do dono em `escritorio/aprovacoes.md`.
