import type { ReactNode } from 'react'

/**
 * Mantém um palco 16:9 centralizado na tela, com letterbox quando a janela
 * não bate com a proporção. Tudo que está dentro pode se posicionar em
 * percentual (%) confiando que a referência é sempre 16:9.
 */
export function Palco({ children }: { children: ReactNode }) {
  return (
    <div className="palco-moldura">
      <div className="palco">{children}</div>
    </div>
  )
}
