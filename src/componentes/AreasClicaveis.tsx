import { AREAS_CLICAVEIS, type IdObjeto } from '../config/cena'

type Props = {
  /** Chamado quando um objeto do cenário é acionado. */
  aoAbrir: (id: IdObjeto) => void
}

/**
 * Retângulos invisíveis por cima do cenário. Ficam transparentes até o mouse
 * chegar; aí ganham contorno e mostram o rótulo.
 *
 * São <button> de verdade, não <div>: assim funcionam no teclado (Tab e
 * Enter) e os leitores de tela anunciam o rótulo.
 */
export function AreasClicaveis({ aoAbrir }: Props) {
  return (
    <div className="areas">
      {AREAS_CLICAVEIS.map((area) => (
        <button
          key={area.id}
          type="button"
          className="area"
          style={{
            left: `${area.x}%`,
            top: `${area.y}%`,
            width: `${area.largura}%`,
            height: `${area.altura}%`,
          }}
          onClick={() => aoAbrir(area.id)}
        >
          <span className="area-rotulo">{area.rotulo}</span>
        </button>
      ))}
    </div>
  )
}
