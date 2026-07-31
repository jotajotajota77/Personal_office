/**
 * ============================================================================
 *  A RESPOSTA DO CAIO  —  é AQUI que a chamada real vai entrar
 * ============================================================================
 *
 * Este arquivo é o único ponto do app que sabe como uma resposta é produzida.
 * Nenhum componente chama modelo, API ou banco: todos chamam `responder()` e
 * esperam uma Promise de texto.
 *
 * Nesta fase a resposta é um texto fixo, com 1 segundo de espera só para a
 * tela parecer viva.
 */

/** Texto fixo desta fase. Sai quando entrar resposta de verdade. */
const RESPOSTA_FIXA =
  'Anotado. Ainda estou desconectado do meu cérebro de verdade — assim que ' +
  'ligarem, eu respondo isso direito.'

/** Quanto tempo a resposta falsa demora, em milissegundos. */
const ESPERA_FALSA = 1000

/**
 * Responde a uma mensagem do usuário.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  AQUI ENTRA A CHAMADA REAL                                           │
 * │                                                                      │
 * │  Trocar o corpo desta função pela chamada ao backend / modelo, algo  │
 * │  na linha de:                                                        │
 * │                                                                      │
 * │    const r = await fetch('/api/chat', {                              │
 * │      method: 'POST',                                                 │
 * │      headers: { 'Content-Type': 'application/json' },                │
 * │      body: JSON.stringify({ mensagem }),                             │
 * │    })                                                                │
 * │    const { texto } = await r.json()                                  │
 * │    return texto                                                      │
 * │                                                                      │
 * │  A assinatura pode ficar como está — quem chama já trata isso como   │
 * │  assíncrono, então nada muda do lado da tela.                        │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * @param mensagem O que o usuário escreveu. Ignorado nesta fase.
 */
export function responder(mensagem: string): Promise<string> {
  // Só para o parâmetro não ficar acusado como não usado enquanto a resposta
  // é fixa. Some junto com o corpo falso.
  void mensagem

  return new Promise((resolve) => {
    setTimeout(() => resolve(RESPOSTA_FIXA), ESPERA_FALSA)
  })
}
