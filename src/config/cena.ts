/**
 * ============================================================================
 *  ARQUIVO ÚNICO DE COORDENADAS  —  edite aqui para calibrar a cena
 * ============================================================================
 *
 * Todas as coordenadas são PERCENTUAIS (0 a 100) relativas ao palco 16:9,
 * NÃO à janela do navegador. O palco mantém a proporção 16:9 sempre, então
 * um valor calibrado aqui continua correto em qualquer tamanho de tela.
 *
 * Sistema de referência do palco:
 *
 *      x: 0 ────────────────────────────────► 100  (esquerda → direita)
 *   y: 0 ┌──────────────────────────────────────┐
 *        │                                      │
 *        │              PALCO 16:9              │
 *        │                                      │
 *    100 └──────────────────────────────────────┘
 *        (topo → base)
 */

/** Caminho do cenário (arquivo em `public/assets/`). */
export const FUNDO_SALA = '/assets/sala-central.png'

// ---------------------------------------------------------------------------
// PERSONAGEM
// ---------------------------------------------------------------------------

export type PosicaoPersonagem = {
  /** Caminho da imagem, em `public/assets/`. */
  imagem: string
  /** Posição horizontal do ponto de ancoragem, em % da largura do palco. */
  x: number
  /** Posição vertical do ponto de ancoragem, em % da altura do palco. */
  y: number
  /**
   * Altura do personagem em % da altura do palco.
   * A largura é calculada sozinha, preservando a proporção da imagem.
   */
  altura: number
  /**
   * Ponto da imagem que fica exatamente sobre (x, y).
   * 'pes'    → a base da imagem (útil para plantar o personagem no chão)
   * 'centro' → o centro da imagem
   */
  ancora: 'pes' | 'centro'
  /** Espelhar horizontalmente (personagem olhando para o outro lado). */
  espelhado: boolean
}

export const PERSONAGEM: PosicaoPersonagem = {
  imagem: '/assets/caio.png',
  x: 30, //  ← mova para a esquerda / direita
  y: 95, //  ← com ancora 'pes', esta é a linha do chão onde ele pisa
  altura: 55, //  ← tamanho dele em relação à altura da sala
  ancora: 'pes',
  espelhado: false,
}

// ---------------------------------------------------------------------------
// ÁREAS CLICÁVEIS
// ---------------------------------------------------------------------------
// Retângulos invisíveis por cima do cenário. x/y é o CANTO SUPERIOR ESQUERDO.
// (Usadas a partir da próxima etapa — já ficam definidas aqui.)

export type IdObjeto = 'quadro' | 'estante' | 'bandeja' | 'relogio'

export type AreaClicavel = {
  id: IdObjeto
  /** Texto que aparece no hover. */
  rotulo: string
  /** Canto superior esquerdo, em % do palco. */
  x: number
  y: number
  /** Tamanho, em % do palco. */
  largura: number
  altura: number
}

export const AREAS_CLICAVEIS: AreaClicavel[] = [
  // Quadro branco na parede do fundo
  { id: 'quadro', rotulo: 'Plano da semana', x: 38.4, y: 13.2, largura: 21.8, altura: 33.2 },
  // Estante de escaninhos (Operations / Research / Outreach / Finance / Creative)
  { id: 'estante', rotulo: 'Entregas', x: 23.3, y: 24.2, largura: 14.6, altura: 23.8 },
  // Balcão da recepção, com a bandeja de papéis
  { id: 'bandeja', rotulo: 'Aguardando aprovação', x: 20.3, y: 48.4, largura: 17.5, altura: 13.8 },
  // Relógio de parede
  { id: 'relogio', rotulo: 'Agendados', x: 16.5, y: 11.4, largura: 6.1, altura: 11.4 },
]

// ---------------------------------------------------------------------------
// SALAS / NAVEGAÇÃO
// ---------------------------------------------------------------------------
// Só a central existe de verdade; as outras direções são telas placeholder.

export type Direcao = 'esquerda' | 'direita' | 'cima' | 'baixo'

/**
 * Cada direção é a sala de um agente. O valor é o NOME dele — o resto
 * (cargo, retrato, o que faz) vem de `AGENTES`, em `src/dados/mock.ts`.
 *
 * O Caio não entra aqui: ele fica na sala central, fazendo a triagem do que
 * chega, e é com ele que se fala pelo chat.
 *
 * A ideia do arranjo: os dois trabalhos no eixo horizontal — docência de um
 * lado, negócio do outro — e as duas funções de apoio no vertical.
 */
export const SAIDAS: Record<Direcao, string> = {
  esquerda: 'Lina',
  direita: 'Ren',
  cima: 'Vega',
  baixo: 'Nico',
}
