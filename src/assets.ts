/**
 * Resolve o caminho de um arquivo de `public/`.
 *
 * Existe por causa do GitHub Pages: lá o site não fica na raiz do domínio e
 * sim em `/Personal_office/`. O Vite reescreve caminhos que ele enxerga no
 * HTML/CSS, mas não os que estão dentro de strings no código — então os
 * caminhos de `src/config/cena.ts` passam por aqui e ganham o prefixo certo
 * (`/` no `npm run dev`, `/Personal_office/` no build de Pages).
 */
export function asset(caminho: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}/${caminho.replace(/^\//, '')}`
}
