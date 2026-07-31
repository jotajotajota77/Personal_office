import type { ReactNode } from 'react'
import type { IdObjeto } from '../config/cena'
import {
  AGENDADOS,
  AGUARDANDO_APROVACAO,
  ENTREGAS,
  PLANO_DA_SEMANA,
  ROTULO_STATUS,
} from '../dados/mock'

/** Quadro branco. */
function PlanoDaSemana() {
  return (
    <ul className="lista">
      {PLANO_DA_SEMANA.map((tarefa) => (
        <li key={tarefa.id} className="item">
          <span className={`selo selo-${tarefa.status}`}>{ROTULO_STATUS[tarefa.status]}</span>
          <div className="item-texto">
            <p className="item-titulo">{tarefa.titulo}</p>
            <p className="item-meta">{tarefa.agente}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

/** Estante de escaninhos. */
function Entregas() {
  return (
    <ul className="lista">
      {ENTREGAS.map((entrega) => (
        <li key={entrega.id} className="item">
          <span className="data">{entrega.data}</span>
          <div className="item-texto">
            <p className="item-titulo">{entrega.titulo}</p>
            <p className="item-meta">
              {entrega.agente} · {entrega.tipo}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

/** Bandeja da recepção. Os botões ainda não fazem nada. */
function AguardandoAprovacao() {
  return (
    <ul className="lista">
      {AGUARDANDO_APROVACAO.map((item) => (
        <li key={item.id} className="item item-aprovacao">
          <div className="item-texto">
            <p className="item-titulo">{item.titulo}</p>
            <p className="item-meta">
              {item.agente} · esperando {item.esperando}
            </p>
            <p className="item-resumo">{item.resumo}</p>
          </div>
          <div className="acoes">
            {/* Sem efeito nesta fase: só a forma dos botões. */}
            <button type="button" className="botao botao-aprovar">
              Aprovar
            </button>
            <button type="button" className="botao botao-recusar">
              Recusar
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

/** Relógio. */
function Agendados() {
  return (
    <ul className="lista">
      {AGENDADOS.map((item) => (
        <li key={item.id} className="item">
          <span className="quando">{item.quando}</span>
          <div className="item-texto">
            <p className="item-titulo">{item.titulo}</p>
            <p className="item-meta">
              {item.agente} · {item.repete}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

/** O que cada objeto do cenário abre. */
export const CONTEUDO_PAINEL: Record<IdObjeto, ReactNode> = {
  quadro: <PlanoDaSemana />,
  estante: <Entregas />,
  bandeja: <AguardandoAprovacao />,
  relogio: <Agendados />,
}
