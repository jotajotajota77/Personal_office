import type { Direcao } from '../config/cena'
import { SAIDAS } from '../config/cena'
import { agenteDoDepartamento, PLANO_DA_SEMANA, ROTULO_STATUS } from '../dados/mock'

/**
 * Sala de departamento. O cenário ainda não existe, mas já mostra quem
 * trabalha ali e no que a pessoa está — é o que dá sentido à navegação.
 */
export function SalaPlaceholder({ direcao }: { direcao: Direcao }) {
  const departamento = SAIDAS[direcao]
  const agente = agenteDoDepartamento(departamento)
  const abertas = PLANO_DA_SEMANA.filter(
    (t) => t.agente === agente?.nome && t.status !== 'feito',
  )

  return (
    <div className="sala sala-vazia">
      <p className="sala-vazia-nome">{departamento}</p>

      {agente ? (
        <>
          <p className="sala-vazia-agente">
            {agente.nome} · {agente.cargo}
          </p>

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
        </>
      ) : (
        <p className="sala-vazia-agente">Sem ninguém alocado ainda.</p>
      )}

      <p className="sala-vazia-aviso">Esta sala ainda não foi construída.</p>
    </div>
  )
}
