import { useEffect, useRef, useState, type FormEvent } from 'react'
import { responder } from '../chat/responder'

type Mensagem = {
  id: number
  autor: 'eu' | 'caio'
  texto: string
}

/**
 * Barra de chat presa na base da tela, com histórico rolável por cima.
 *
 * O componente não sabe de onde vem a resposta: chama `responder()` e espera.
 * Trocar o placeholder pela chamada real não encosta neste arquivo.
 */
export function Chat() {
  const [mensagens, setMensagens] = useState<Mensagem[]>([])
  const [texto, setTexto] = useState('')
  const historico = useRef<HTMLDivElement>(null)
  const proximoId = useRef(0)

  // Cada mensagem nova rola o histórico para o fim.
  useEffect(() => {
    const el = historico.current
    if (el) el.scrollTop = el.scrollHeight
  }, [mensagens])

  const enviar = async (e: FormEvent) => {
    e.preventDefault()
    const escrito = texto.trim()
    if (!escrito) return

    setMensagens((antes) => [...antes, { id: proximoId.current++, autor: 'eu', texto: escrito }])
    setTexto('')

    const resposta = await responder(escrito)
    setMensagens((antes) => [...antes, { id: proximoId.current++, autor: 'caio', texto: resposta }])
  }

  return (
    <div className="chat">
      {mensagens.length > 0 && (
        <div className="chat-historico" ref={historico}>
          {mensagens.map((m) => (
            <div key={m.id} className={`fala fala-${m.autor}`}>
              <span className="fala-autor">{m.autor === 'eu' ? 'Você' : 'Caio'}</span>
              <p className="fala-texto">{m.texto}</p>
            </div>
          ))}
        </div>
      )}

      <form className="chat-barra" onSubmit={enviar}>
        <input
          className="chat-campo"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Falar com o Caio…"
          aria-label="Mensagem para o Caio"
        />
        <button type="submit" className="chat-enviar">
          Enviar
        </button>
      </form>
    </div>
  )
}
