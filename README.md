# Escritório-casa

Workspace de um escritório multi-agente no Claude Code, servindo três
contextos: a **Drap** (software house), a **UEG** (docência) e a **vida
pessoal** do dono.

## O escritório

Abra o Claude Code neste repo e fale com o **Caio** — o `CLAUDE.md` define
a sessão como ele: assistente de triagem, roteia tudo que chega. Os quatro
diretores são subagentes com contrato e ferramentas próprios:

| Agente | Sala | Cuida de |
| --- | --- | --- |
| Caio | recepção (a sessão) | triagem, roteamento, vida pessoal |
| Lina | `.claude/agents/lina.md` | docência na UEG |
| Ren | `.claude/agents/ren.md` | operações e estratégia da Drap |
| Vega | `.claude/agents/vega.md` | tecnologia e segurança da Drap |
| Nico | `.claude/agents/nico.md` | inovação (protótipos em `prototipos/`) |

O estado vive em `escritorio/` (plano, entregas, aprovações, agendados) —
formato no cabeçalho de cada arquivo; o `git log` deles é o histórico do
escritório. As 12 skills em `.claude/skills/` têm placeholders
`<preencher>` com o conhecimento da casa — enquanto vazios, os agentes
perguntam em vez de inventar.

Ações sensíveis (e-mail, deploy, portal, preço, contrato) param em
`escritorio/aprovacoes.md` até o OK do dono; parte disso é imposta por
`deny`/`ask` em `.claude/settings.json`, não só combinada.

---

## A interface visual (dormente)

O que segue abaixo descreve o app Vite/React — a tela do escritório com
dados falsos. Está **congelado por decisão do dono**: funciona, publica,
mas não recebe mudança até segunda ordem (as regras de permissão bloqueiam
edição em `src/` e `public/`).

## Rodar

```bash
npm install
npm run dev
```

## Assets

Os arquivos vivem em `public/assets/`:

| Arquivo             | O que é                                  |
| ------------------- | ---------------------------------------- |
| `sala-central.png`  | ilustração 16:9 da sala vista de lado    |
| `caio.png`          | personagem de corpo inteiro, fundo transparente |

> **Atenção:** os dois arquivos hoje no repositório são **placeholders**
> gerados automaticamente — as ilustrações reais não estavam na pasta quando
> o projeto foi criado. Basta sobrescrever os arquivos mantendo os nomes; o
> resto do código não muda.

## Calibrar a cena

Todas as coordenadas estão em **um único arquivo**: `src/config/cena.ts`.

São percentuais (0–100) relativos ao palco 16:9 — nunca à janela do
navegador — então o valor calibrado continua certo em qualquer tela.

- `PERSONAGEM` → posição, tamanho e ancoragem do Caio
- `AREAS_CLICAVEIS` → retângulos invisíveis dos objetos da cena
- `SAIDAS` → nome das salas vizinhas em cada direção

## Onde fica cada coisa

| Caminho | O que é |
| --- | --- |
| `src/config/cena.ts` | todas as coordenadas, num arquivo só |
| `src/dados/mock.ts` | os dados falsos dos painéis |
| `src/chat/responder.ts` | **onde a chamada real do chat vai entrar** |
| `src/navegacao.ts` | quais direções têm saída e para onde levam |
| `src/componentes/` | a tela em si |

## Navegação

Setas do teclado trocam de sala. Só a central existe; as outras quatro
direções mostram um placeholder com o nome, e de lá a única saída é voltar.
As setas são ignoradas enquanto você digita no chat ou com um painel aberto.
