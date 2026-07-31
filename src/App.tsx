import { useCallback, useState } from 'react'
import { AREAS_CLICAVEIS, type IdObjeto } from './config/cena'
import { AreasClicaveis } from './componentes/AreasClicaveis'
import { CONTEUDO_PAINEL } from './componentes/conteudoPaineis'
import { Painel } from './componentes/Painel'
import { Palco } from './componentes/Palco'
import { SalaCentral } from './componentes/SalaCentral'

export default function App() {
  const [aberto, setAberto] = useState<IdObjeto | null>(null)
  const fechar = useCallback(() => setAberto(null), [])

  const area = AREAS_CLICAVEIS.find((a) => a.id === aberto)

  return (
    <Palco>
      <SalaCentral />
      <AreasClicaveis aoAbrir={setAberto} />
      {area && (
        <Painel titulo={area.rotulo} aoFechar={fechar}>
          {CONTEUDO_PAINEL[area.id]}
        </Painel>
      )}
    </Palco>
  )
}
