import type { CSSProperties } from 'react'
import { PERSONAGEM } from '../config/cena'

/**
 * Personagem estático, posicionado por percentual sobre o cenário.
 * Sem animação — a posição vem inteira de `src/config/cena.ts`.
 */
export function Personagem() {
  const { imagem, x, y, altura, ancora, espelhado } = PERSONAGEM

  const deslocamentoY = ancora === 'pes' ? '-100%' : '-50%'
  const estilo: CSSProperties = {
    left: `${x}%`,
    top: `${y}%`,
    height: `${altura}%`,
    transform: `translate(-50%, ${deslocamentoY})${espelhado ? ' scaleX(-1)' : ''}`,
  }

  return <img className="personagem" src={imagem} alt="Caio" style={estilo} />
}
