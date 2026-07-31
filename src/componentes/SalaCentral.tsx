import { asset } from '../assets'
import { FUNDO_SALA, type IdObjeto } from '../config/cena'
import { AreasClicaveis } from './AreasClicaveis'
import { Personagem } from './Personagem'

type Props = {
  aoAbrirObjeto: (id: IdObjeto) => void
}

/** Cenário da sala central, personagem e objetos clicáveis. */
export function SalaCentral({ aoAbrirObjeto }: Props) {
  return (
    <div className="sala">
      <img className="cenario" src={asset(FUNDO_SALA)} alt="Sala central" />
      <Personagem />
      <AreasClicaveis aoAbrir={aoAbrirObjeto} />
    </div>
  )
}
