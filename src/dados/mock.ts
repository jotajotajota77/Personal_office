/**
 * Dados falsos desta fase.
 *
 * Tudo aqui é chumbado à mão só para a tela ter o que mostrar. Quando entrar
 * dado de verdade, é este arquivo que sai — nenhum componente inventa dado
 * por conta própria, todos leem daqui.
 */

// ---------------------------------------------------------------------------
// Quadro branco → Plano da semana
// ---------------------------------------------------------------------------

export type StatusTarefa = 'feito' | 'fazendo' | 'parado' | 'a-fazer'

export type Tarefa = {
  id: string
  titulo: string
  status: StatusTarefa
  agente: string
}

/** Rótulo curto de cada status, para não repetir string solta pelos componentes. */
export const ROTULO_STATUS: Record<StatusTarefa, string> = {
  feito: 'Feito',
  fazendo: 'Fazendo',
  parado: 'Parado',
  'a-fazer': 'A fazer',
}

export const PLANO_DA_SEMANA: Tarefa[] = [
  { id: 't1', titulo: 'Planejamento e sync da semana', status: 'feito', agente: 'Caio' },
  { id: 't2', titulo: 'Rascunho da campanha de outreach', status: 'feito', agente: 'Nina' },
  { id: 't3', titulo: 'Pesquisa a fundo do setor Core City', status: 'fazendo', agente: 'Nina' },
  { id: 't4', titulo: 'Revisão dos dados de BI', status: 'fazendo', agente: 'Caio' },
  { id: 't5', titulo: 'Conceito criativo do GT', status: 'parado', agente: 'Vera' },
  { id: 't6', titulo: 'Fechamento do orçamento', status: 'a-fazer', agente: 'Otto' },
  { id: 't7', titulo: 'Retrospectiva e envio de sexta', status: 'a-fazer', agente: 'Caio' },
]

// ---------------------------------------------------------------------------
// Estante → Entregas
// ---------------------------------------------------------------------------

export type Entrega = {
  id: string
  /** Já formatada; nesta fase não há fuso nem locale para resolver. */
  data: string
  agente: string
  titulo: string
  tipo: string
}

export const ENTREGAS: Entrega[] = [
  { id: 'e1', data: '30/07', agente: 'Nina', titulo: 'Mapa de setores — v3', tipo: 'Documento' },
  { id: 'e2', data: '29/07', agente: 'Caio', titulo: 'Resumo semanal de BI', tipo: 'Planilha' },
  { id: 'e3', data: '28/07', agente: 'Vera', titulo: 'Três rotas criativas para o GT', tipo: 'Apresentação' },
  { id: 'e4', data: '27/07', agente: 'Otto', titulo: 'Fechamento de julho', tipo: 'Planilha' },
  { id: 'e5', data: '25/07', agente: 'Nina', titulo: 'Lista de contatos de outreach', tipo: 'Documento' },
  { id: 'e6', data: '24/07', agente: 'Caio', titulo: 'Notas da retro anterior', tipo: 'Documento' },
]

// ---------------------------------------------------------------------------
// Bandeja da recepção → Aguardando aprovação
// ---------------------------------------------------------------------------

export type Aprovacao = {
  id: string
  titulo: string
  agente: string
  /** Há quanto tempo está parado esperando. */
  esperando: string
  resumo: string
}

export const AGUARDANDO_APROVACAO: Aprovacao[] = [
  {
    id: 'a1',
    titulo: 'Enviar o e-mail de outreach para a lista North Reach',
    agente: 'Nina',
    esperando: 'há 2 h',
    resumo: '48 contatos, primeiro disparo da sequência.',
  },
  {
    id: 'a2',
    titulo: 'Publicar o mapa de setores no canal do time',
    agente: 'Vera',
    esperando: 'há 5 h',
    resumo: 'Versão 3, já com a revisão do Caio aplicada.',
  },
  {
    id: 'a3',
    titulo: 'Fechar o orçamento de agosto',
    agente: 'Otto',
    esperando: 'há 1 dia',
    resumo: 'Corte de 8% em ferramentas, resto mantido.',
  },
]

// ---------------------------------------------------------------------------
// Relógio → Agendados
// ---------------------------------------------------------------------------

export type Agendado = {
  id: string
  titulo: string
  agente: string
  /** Quando dispara. */
  quando: string
  repete: string
}

export const AGENDADOS: Agendado[] = [
  { id: 'g1', titulo: 'Sync da manhã', agente: 'Caio', quando: 'Amanhã, 09:00', repete: 'Todo dia útil' },
  { id: 'g2', titulo: 'Coleta de métricas de BI', agente: 'Caio', quando: 'Amanhã, 18:00', repete: 'Todo dia' },
  { id: 'g3', titulo: 'Segunda leva de outreach', agente: 'Nina', quando: 'Seg, 10:00', repete: 'Uma vez' },
  { id: 'g4', titulo: 'Retrospectiva da semana', agente: 'Vera', quando: 'Sex, 16:00', repete: 'Toda semana' },
  { id: 'g5', titulo: 'Fechamento do mês', agente: 'Otto', quando: '01/08, 08:00', repete: 'Todo mês' },
]
