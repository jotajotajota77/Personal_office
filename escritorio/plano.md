# Plano da semana — 03 a 09/08/2026

<!--
FORMATO (não mude a estrutura — humanos e agentes leem este arquivo):
- Uma seção `## Nome` por agente.
- Cada tarefa é um item de checklist: `- [ ]` aberta, `- [x]` concluída.
- Status opcional no fim da linha: #fazendo ou #parado. Sem tag = a fazer.
- Prazo rígido vai na própria linha, em MAIÚSCULA (ex.: "até SEGUNDA").
- #menor-prioridade marca o que só entra se sobrar semana.
- Quem escreve: o Caio (ao despachar) e cada diretor (ao mudar status).
- Tarefa concluída ganha `[x]` aqui E uma linha em entregas.md.
-->

## Caio

- [ ] Manter este plano ao longo da semana (dono vai concluindo e somando itens)
- [ ] Retro da semana — SEXTA 07/08
- [x] Acertar as datas x dias da semana deste plano e dos agendados: o dono
      decidiu em 03/08 que vale o DIA DA SEMANA; as datas estavam um dia à
      frente e foram recuadas (10/08 já estava certo e não mudou)
- [x] Cakto: o reembolso do "Code Eagle — Repositório" em 08/08 foi o próprio
      dono. Sem acesso indevido, nada a fazer
- [ ] Pessoal: Google One com pagamento recusado em 02/08 — atualizar forma de
      pagamento ou o plano é cancelado
- [ ] Pessoal: conferir o alerta de novo login em empresaexemplo9@gmail.com
      (você é o e-mail de recuperação dessa conta)
- [ ] Varrer o atrasado da caixa de entrada: ~160 não lidos anteriores a 01/08
      #menor-prioridade

## Lina

- [x] Orçamento de palavras seção por seção do paper JRAAS-2026-0085, amarrado
      aos 8 pontos do editor — DESPACHADO HOJE 03/08, entrega em
      escritorio/paper-jraas-2026-0085/plano-de-corte.md
- [x] Manuscrito v4 do JRAAS-2026-0085: aplicar as três auditorias (editorial,
      referências, fidelidade científica) e escrever o README da reunião —
      escritorio/paper-jraas-2026-0085/README-v4.md
- [x] Reunião com Carlos, QUARTA 05/08 08:00 — aconteceu. O resultado está em
      `paper-jraas-2026-0085/Submission_2_3-reuniao-05-08.docx`, com a nota de
      cotejo ao lado.
- [x] PAPER JRAAS-2026-0085 ENCERRADO NO ESCRITÓRIO. Em 05/08 o dono passou o
      trabalho para o orientador, que toca daqui em diante. NENHUM agente
      retoma isso sem o dono pedir — nem para transplantar a Table 1, as
      declarações ou as referências Vancouver do v4, que ficam guardadas no
      diretório caso um dia sejam pedidas.
- [x] Acúmulo de QUARTA 05/08 resolvido pelo dono em 04/08: Carlos às 08:00,
      Leo às 14:30, e Itumbiara não acontece. As duas estão no calendário —
      criei a entrada da reunião do Carlos, que não existia, sem convidado,
      para não disparar convite sem seu OK
- [ ] Ressubmeter o projeto no CEP — SEXTA 14/08, semana que vem (g7). Cai
      depois do início do semestre (10/08), então a preparação tem que caber
      nesta semana ou nos primeiros dias de aula. FALTA SABER o que o CEP
      pediu na devolutiva — sem isso ninguém dimensiona o trabalho
- [ ] Planejamento do semestre: Anatomia 1 (Farmácia), Anatomia 2 (Farmácia)
      e Anatomia 2 (Enfermagem) — antes de SEGUNDA 10/08. Contar com o CEP de
      14/08 no meio, que disputa a mesma semana
- [ ] Achar o calendário acadêmico 2026/2 da UEG (primeiro passo do planejamento)
- [ ] Levantar com a Jaqueline as demandas do Farmatec
- [x] Confirmar o compromisso de QUARTA 05/08 em Itumbiara — o dono decidiu em
      04/08 que NÃO vai. Saiu dos agendados (era g4)

## Ren

- [ ] Levantar com o Flávio as demandas do CAD Telefar
- [ ] Geires: desenhar o escopo da compra 100% online (o build vai depois para a Vega)
- [ ] Geires: iniciar o registro da marca dela no INPI
- [ ] Marcar (ou realizar) a reunião com o Zé Orlando
- [ ] Agendar reunião Celmar + Raiz Caipira
- [ ] Reunião com o Leo — CANCELADA, não aconteceu na quarta 05/08. Remarcar?
      Se sim, desta vez com pauta antes (a anterior nunca teve)
- [ ] Verificar a pendência do Focus NFe (Drap)
- [ ] Verificar o cadastro DUNS (Drap)
- [ ] Acompanhar o processo da Drap no INPI
- [ ] Pensar divulgação/funil de aquisição da Drap #menor-prioridade

## Vega

- [x] Raiz Caipira ENTREGUE em QUINTA 06/08, presencialmente. O dono confirmou
      em 08/08: o cliente já está usando e está tudo em ordem
- [ ] SEIS deploys em produção no drap-web entre qui 06/08 23:38 e sex 07/08
      01:26 — 26f897695f6b (82 arquivos), 12b68f732d95 (77), 99944849eab2 (73),
      33d4aa1ff9f7 (50), 39a9b3e388d7 (28), todos "20 commits, 2 autores". Cinco
      deploys em menos de duas horas de madrugada, com o número de arquivos
      caindo a cada um, tem cara de conserto em cima de deploy quebrado. NÃO é
      do Raiz Caipira, que foi entregue na quinta e está em uso sem problema —
      é o drap-web. Seja o que for, não há registro em lugar nenhum: vale
      escrever o que aconteceu antes de esquecer, e é exatamente o que o
      runbook-deploy (que segue vazio) existiria para evitar
- [ ] Sentry DRAP-WEB-6, aberta em 04/08 às 05:01 em produção (drap-web):
      "Error: cron/recorrencias regras query: TypeError: fetch failed" no
      GET /api/cron/recorrencias. ATENÇÃO à coincidência: ontem 03/08 às 14:01
      subiu deploy em vercel-production (eda00d563541, 20 commits, 97 arquivos)
      e é a segunda issue nova em dois dias — conferir se o deploy causou
- [ ] Sentry DRAP-WEB-5, aberta em 03/08 em produção (drap-web): "recover:
      redirect_to fallback — allowlist do Supabase desalinhada". Quebra o fluxo
      de recuperação de senha e cheira a open redirect — avaliar risco primeiro
- [ ] Colocar o Fazenda no padrão em que o Granja ficou #menor-prioridade

## Nico
