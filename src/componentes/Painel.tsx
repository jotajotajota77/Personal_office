import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  titulo: string
  aoFechar: () => void
  children: ReactNode
}

/**
 * Painel que abre sobre a cena, com o cenário escurecido atrás.
 * Fecha no X, no Esc e clicando fora.
 */
export function Painel({ titulo, aoFechar, children }: Props) {
  const botaoFechar = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Impede que a mesma tecla chegue em quem estiver escutando embaixo.
        e.stopPropagation()
        aoFechar()
      }
    }
    document.addEventListener('keydown', aoTeclar)
    return () => document.removeEventListener('keydown', aoTeclar)
  }, [aoFechar])

  // Leva o foco para dentro do painel, senão o Tab continuaria passeando
  // pelas áreas clicáveis que estão atrás.
  useEffect(() => {
    botaoFechar.current?.focus()
  }, [])

  return (
    <div className="painel-fundo" onClick={aoFechar}>
      <div
        className="painel"
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        // O clique dentro do painel não pode contar como clique fora.
        onClick={(e) => e.stopPropagation()}
      >
        <header className="painel-topo">
          <h2 className="painel-titulo">{titulo}</h2>
          <button
            ref={botaoFechar}
            type="button"
            className="painel-fechar"
            onClick={aoFechar}
            aria-label="Fechar"
          >
            ×
          </button>
        </header>
        <div className="painel-corpo">{children}</div>
      </div>
    </div>
  )
}
