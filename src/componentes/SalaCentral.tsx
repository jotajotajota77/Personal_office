import { FUNDO_SALA } from '../config/cena'
import { Personagem } from './Personagem'

/** Cenário da sala central + personagem por cima. */
export function SalaCentral() {
  return (
    <div className="sala">
      <img className="cenario" src={FUNDO_SALA} alt="Sala central" />
      <Personagem />
    </div>
  )
}
