import type { Direcao } from '../config/cena'
import { SAIDAS } from '../config/cena'

/** Sala que ainda não existe: só o nome, para a navegação ter para onde ir. */
export function SalaPlaceholder({ direcao }: { direcao: Direcao }) {
  return (
    <div className="sala sala-vazia">
      <p className="sala-vazia-nome">{SAIDAS[direcao]}</p>
      <p className="sala-vazia-aviso">Esta sala ainda não foi construída.</p>
    </div>
  )
}
