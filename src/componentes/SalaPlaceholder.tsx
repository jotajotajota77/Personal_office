import { useState } from 'react'
import { asset } from '../assets'
import type { Direcao } from '../config/cena'
import { SAIDAS } from '../config/cena'
import { agentePorNome, PLANO_DA_SEMANA, ROTULO_STATUS } from '../dados/mock'

/**
 * Sala de um agente. O cenário ainda não existe, mas já mostra de quem é a
 * sala e no que a pessoa está — é o que dá sentido à navegação.
 */
export function SalaPlaceholder({ direcao }: { direcao: Direcao }) {
  const agente = agentePorNome(SAIDAS[direcao])
  // Os retratos ainda não estão na pasta; sem isto apareceria ícone quebrado.
  const [semRetrato, setSemRetrato] = useState(false)

  const abertas = PLANO_DA_SEMANA.filter(
    (t) => t.agente === agente?.nome && t.status !== 'feito',
  )

  if (!agente) {
    return (
      <div className="sala sala-vazia">
        <p className="sala-vazia-nome">{SAIDAS[direcao]}</p>
        <p className="sala-vazia-agente">Sem ninguém alocado ainda.</p>
      </div>
    )
  }

  return (
    <div className="sala sala-vazia">
      <div className="sala-vazia-ficha">
        {!semRetrato && (
          <img
            className="sala-vazia-retrato"
            src={asset(agente.retrato)}
            alt={agente.nome}
            onError={() => setSemRetrato(true)}
          />
        )}

        <div className="sala-vazia-texto">
          <p className="sala-vazia-nome">{agente.sala ?? agente.nome}</p>
          <p className="sala-vazia-agente">{agente.cargo}</p>

          {abertas.length > 0 && (
            <ul className="sala-vazia-tarefas">
              {abertas.map((t) => (
                <li key={t.id}>
                  <span className={`selo selo-${t.status}`}>{ROTULO_STATUS[t.status]}</span>
                  {t.titulo}
                </li>
              ))}
            </ul>
          )}

          <p className="sala-vazia-aviso">Esta sala ainda não foi construída.</p>
        </div>
      </div>
    </div>
  )
}
