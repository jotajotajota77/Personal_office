import { SAIDAS, type Direcao } from '../config/cena'
import { saidasDe, type Sala } from '../navegacao'

const SETA: Record<Direcao, string> = {
  esquerda: '‹',
  direita: '›',
  cima: '⌃',
  baixo: '⌄',
}

/** Marcas discretas nas bordas, uma para cada direção que tem saída. */
export function IndicadorSaidas({ sala }: { sala: Sala }) {
  return (
    <div className="saidas" aria-hidden="true">
      {saidasDe(sala).map((direcao) => (
        <div key={direcao} className={`saida saida-${direcao}`}>
          <span className="saida-seta">{SETA[direcao]}</span>
          <span className="saida-nome">{sala === null ? SAIDAS[direcao] : 'Sala central'}</span>
        </div>
      ))}
    </div>
  )
}
