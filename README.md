# Escritório-casa

Interface de um escritório-casa onde agentes de IA trabalham.
Nesta fase é **só a tela**, com dados falsos — sem API, sem banco, sem chamada
de modelo.

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
