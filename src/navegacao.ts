import type { Direcao } from './config/cena'

/**
 * Regras de quem leva a quem.
 *
 * Só a sala central existe de verdade. As outras quatro são placeholders com
 * uma saída só: de volta para o centro. `null` é a sala central.
 */
export type Sala = Direcao | null

export const DIRECOES: Direcao[] = ['esquerda', 'direita', 'cima', 'baixo']

const OPOSTA: Record<Direcao, Direcao> = {
  esquerda: 'direita',
  direita: 'esquerda',
  cima: 'baixo',
  baixo: 'cima',
}

/** Quais direções têm saída a partir de uma sala. */
export function saidasDe(sala: Sala): Direcao[] {
  // Do centro dá para ir aos quatro lados; de uma sala vizinha, só voltar.
  return sala === null ? DIRECOES : [OPOSTA[sala]]
}

/**
 * Para onde uma direção leva, ou `undefined` se não houver saída ali.
 * Cuidado: o destino pode ser `null` (a sala central), que é diferente de
 * "não tem saída" — daí o `undefined`.
 */
export function destino(sala: Sala, direcao: Direcao): Sala | undefined {
  if (sala === null) return direcao
  return OPOSTA[sala] === direcao ? null : undefined
}

/** Seta do teclado → direção. Devolve `undefined` para qualquer outra tecla. */
export function direcaoDaTecla(tecla: string): Direcao | undefined {
  switch (tecla) {
    case 'ArrowLeft':
      return 'esquerda'
    case 'ArrowRight':
      return 'direita'
    case 'ArrowUp':
      return 'cima'
    case 'ArrowDown':
      return 'baixo'
    default:
      return undefined
  }
}
