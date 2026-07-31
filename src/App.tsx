import { useCallback, useEffect, useState } from 'react'
import { AREAS_CLICAVEIS, type Direcao, type IdObjeto } from './config/cena'
import { Chat } from './componentes/Chat'
import { CONTEUDO_PAINEL } from './componentes/conteudoPaineis'
import { IndicadorSaidas } from './componentes/IndicadorSaidas'
import { Painel } from './componentes/Painel'
import { Palco } from './componentes/Palco'
import { SalaCentral } from './componentes/SalaCentral'
import { SalaPlaceholder } from './componentes/SalaPlaceholder'
import { destino, direcaoDaTecla, type Sala } from './navegacao'

/** Uma sala qualquer, central ou placeholder. */
function Cena({ sala, aoAbrirObjeto }: { sala: Sala; aoAbrirObjeto: (id: IdObjeto) => void }) {
  return sala === null ? (
    <SalaCentral aoAbrirObjeto={aoAbrirObjeto} />
  ) : (
    <SalaPlaceholder direcao={sala} />
  )
}

export default function App() {
  const [sala, setSala] = useState<Sala>(null)
  const [aberto, setAberto] = useState<IdObjeto | null>(null)

  // Sala que está saindo de quadro, junto com o sentido do movimento. Fica
  // montada só durante a animação de slide.
  const [saindo, setSaindo] = useState<{ sala: Sala; sentido: Direcao } | null>(null)

  const fechar = useCallback(() => setAberto(null), [])

  const navegar = useCallback(
    (direcao: Direcao) => {
      setSala((atual) => {
        const proxima = destino(atual, direcao)
        if (proxima === undefined) return atual // não há saída desse lado
        setSaindo({ sala: atual, sentido: direcao })
        return proxima
      })
    },
    [],
  )

  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      const direcao = direcaoDaTecla(e.key)
      if (!direcao) return

      // Não sequestra as setas de quem está escrevendo no chat.
      const foco = document.activeElement
      if (foco instanceof HTMLInputElement || foco instanceof HTMLTextAreaElement) return

      // Nem navega por trás de um painel aberto.
      if (aberto !== null) return

      e.preventDefault()
      navegar(direcao)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [aberto, navegar])

  const area = AREAS_CLICAVEIS.find((a) => a.id === aberto)

  return (
    <>
      <Palco>
        {saindo && (
          <div
            key={`saindo-${String(saindo.sala)}`}
            className={`camada saindo-${saindo.sentido}`}
            onAnimationEnd={() => setSaindo(null)}
          >
            <Cena sala={saindo.sala} aoAbrirObjeto={setAberto} />
          </div>
        )}

        <div
          key={`atual-${String(sala)}`}
          className={`camada ${saindo ? `entrando-${saindo.sentido}` : ''}`}
        >
          <Cena sala={sala} aoAbrirObjeto={setAberto} />
        </div>

        <IndicadorSaidas sala={sala} />

        {area && (
          <Painel titulo={area.rotulo} aoFechar={fechar}>
            {CONTEUDO_PAINEL[area.id]}
          </Painel>
        )}
      </Palco>

      {/* Fora do palco: o chat gruda na base da tela, não na base da cena. */}
      <Chat />
    </>
  )
}
