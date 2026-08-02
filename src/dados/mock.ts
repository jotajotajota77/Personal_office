/**
 * Dados falsos desta fase.
 *
 * Tudo aqui é chumbado à mão só para a tela ter o que mostrar. Quando entrar
 * dado de verdade, é este arquivo que sai — nenhum componente inventa dado
 * por conta própria, todos leem daqui.
 *
 * O conteúdo imita os dois trabalhos do dono do escritório: docência e
 * empreendimento/dev. Se os itens parecerem plausíveis demais, é de
 * propósito — mas nada aqui é real.
 */

// ---------------------------------------------------------------------------
// Quem trabalha onde
// ---------------------------------------------------------------------------

export type Agente = {
  nome: string
  cargo: string
  /** Como a sala dele é chamada. `null` para o Caio, que fica na central. */
  sala: string | null
  /** Retrato de corpo inteiro em `public/assets/`. */
  retrato: string
}

/**
 * O Caio é o único sem sala própria: ele atende na central e faz a triagem.
 * Os outros quatro moram cada um numa direção — quem fica em qual está em
 * `SAIDAS`, em `src/config/cena.ts`, e o casamento é pelo campo `nome`.
 */
export const AGENTES: Agente[] = [
  {
    nome: 'Caio',
    cargo: 'Assistente de triagem · jovem aprendiz',
    sala: null,
    retrato: '/assets/caio.png',
  },
  {
    nome: 'Lina',
    cargo: 'Diretora acadêmica',
    sala: 'Sala da Lina',
    retrato: '/assets/lina.png',
  },
  {
    nome: 'Ren',
    cargo: 'Diretor de operações e estratégia',
    sala: 'Sala do Ren',
    retrato: '/assets/ren.png',
  },
  {
    nome: 'Nico',
    cargo: 'Diretor de inovação',
    sala: 'Sala do Nico',
    retrato: '/assets/nico.png',
  },
  {
    nome: 'Vega',
    cargo: 'Diretora de tecnologia e segurança',
    sala: 'Sala da Vega',
    retrato: '/assets/vega.png',
  },
]

/** Acha um agente pelo nome. `undefined` se não existir. */
export function agentePorNome(nome: string): Agente | undefined {
  return AGENTES.find((a) => a.nome === nome)
}

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
  { id: 't1', titulo: 'Triagem da caixa de entrada da semana', status: 'feito', agente: 'Caio' },
  { id: 't2', titulo: 'Fechar o plano de aula da unidade 3', status: 'feito', agente: 'Lina' },
  { id: 't3', titulo: 'Corrigir as entregas da turma da noite', status: 'fazendo', agente: 'Lina' },
  { id: 't4', titulo: 'Revisar a precificação da mentoria', status: 'fazendo', agente: 'Ren' },
  { id: 't5', titulo: 'Protótipo do corretor automático de exercícios', status: 'parado', agente: 'Nico' },
  { id: 't6', titulo: 'Rotina de backup do banco', status: 'a-fazer', agente: 'Vega' },
  { id: 't7', titulo: 'Retrospectiva da semana', status: 'a-fazer', agente: 'Caio' },
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
  { id: 'e1', data: '30/07', agente: 'Lina', titulo: 'Plano de aula — unidade 3', tipo: 'Documento' },
  { id: 'e2', data: '29/07', agente: 'Vega', titulo: 'Relatório de dependências vulneráveis', tipo: 'Documento' },
  { id: 'e3', data: '28/07', agente: 'Ren', titulo: 'Tabela de preços da mentoria', tipo: 'Planilha' },
  { id: 'e4', data: '27/07', agente: 'Nico', titulo: 'Corretor de exercícios — protótipo v0.2', tipo: 'Protótipo' },
  { id: 'e5', data: '25/07', agente: 'Lina', titulo: 'Rubrica de avaliação da turma da noite', tipo: 'Documento' },
  { id: 'e6', data: '24/07', agente: 'Caio', titulo: 'Resumo dos e-mails da semana', tipo: 'Documento' },
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
    titulo: 'Publicar a ementa revisada no portal da turma',
    agente: 'Lina',
    esperando: 'há 2 h',
    resumo: 'Unidade 3 reescrita, carga horária mantida.',
  },
  {
    id: 'a2',
    titulo: 'Subir a correção automática em produção',
    agente: 'Vega',
    esperando: 'há 5 h',
    resumo: 'Passou nos testes; entra só na turma piloto.',
  },
  {
    id: 'a3',
    titulo: 'Reajustar o valor da mentoria em 12%',
    agente: 'Ren',
    esperando: 'há 1 dia',
    resumo: 'Vale para novas matrículas; quem já entrou mantém o preço.',
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
  { id: 'g1', titulo: 'Triagem da caixa de entrada', agente: 'Caio', quando: 'Amanhã, 08:00', repete: 'Todo dia útil' },
  { id: 'g2', titulo: 'Lembrete de correção antes da aula', agente: 'Lina', quando: 'Ter, 19:00', repete: 'Toda semana' },
  { id: 'g3', titulo: 'Varredura de dependências', agente: 'Vega', quando: 'Sex, 23:00', repete: 'Toda semana' },
  { id: 'g4', titulo: 'Revisão de metas do mês', agente: 'Ren', quando: '01/08, 09:00', repete: 'Todo mês' },
  { id: 'g5', titulo: 'Caça a ferramentas novas', agente: 'Nico', quando: 'Sáb, 10:00', repete: 'Toda semana' },
]
