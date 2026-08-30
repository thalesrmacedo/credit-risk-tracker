Nesse documento deixarei minhas anotações sobre o desenvolvimento do projeto principal disponível em: https://github.com/thalesrmacedo/credit-risk-decision-engine
# Definição do problema
### Definição do problema de negócio
Um banco fictício oferece cartão de crédito para pessoas físicas. Quando um cliente solicita um cartão, o banco precisa decidir se aprova ou reprova automaticamente a liberação ou se faz a revisão manualmente da decisão final. Como utilizar o histórico financeiro de um cliente para estimar sua probabilidade de default e apoiar a decisão de concessão de crédito? Concluído em 18/08/2026
### Definição do objetivo do modelo
O modelo precisa aprender a analisar o histórico dos últimos 6 meses de um cliente (análise de dados) e qual a probabilidade de um cliente entrar em inadimplência nos próximos 6 meses (Cálculo de PD). Concluído em 18/08/2026.
### Definição da variável target
Dentro da janela de observação são estudadas as features e dentro da janela de performance é observado se o cliente atingiu os critérios definidos para default, determinando o target (default = 1 ou default = 0). Com as features e o target o modelo é treinado e, com este, é estimado um PD (probabilidade de default). Concluído em 19/08/2026
### Definição do default
Compreendi os conceitos de default, a escolha de um tempo adequado para a janela de observação, quais informações podemos utilizar (estudo preliminar para definir as variáveis) e a justificativa do porquê do banco calcular uma probabilidade de default ao invés de fazer uma classificação de cliente "bom ou "ruim". Também compreendi sobre como instituições financeiras definem default, o que é DPD (days past due), a diferença entre atraso e default, o que é "cure" em crédito. Os problemas de se utilizar apenas a disponibilidade de saldo para determinar atrasos e as regras para o default de acordo com as regras estruturadas (se ele atingiu DPD > 90 na janela de performance). Concluído em 19/08/2026
### Definição da janela de observação
Compreendi o que significa observation window (horizonte de observação), que é o tempo passado que será estudado para fornecer as informações utilizadas pelo modelo para estimar o PD. É com ele que são criadas as variáveis do modelo. O foco do observation window é a criação de features, ou seja, informações que representam o comportamento do cliente. Concluído em: 20/08/2026.
### Definição da janela de performance
Compreendi o que significa performance window (horizonte de previsão, que é o tempo futuro em que será observado se o cliente atingiu os critérios para default = 1. O foco do performance window é determinar targets. A escolha do tempo depende do objetivo do modelo e de que forma ele auxiliará. Concluído em 20/08/2026
### Criação do documento "Business Case" no GitHub
O documento Business Case foi criado no GitHub e nele foram inseridas as informações mais relevanes referente à etapa de definição do problema: Contexto do negócio, Problema, Objetivo, Definição de default, Variável target, Horizonte de observação, Horizonte de performance, Decisão que o modelo deverá apoiar, Variáveis candidatas e Limitações iniciais. Concluído em 24/08/2026

# Dados

### Levantamento das variáveis
Após compreender o que significa: número de consultas recentes ao crédito, quantidade de contratos de crédito ativos, quantidade de produtos financeiros, comprometimento de renda, dívida total, número de contas/cartões, tempo desde o último atraso e tendência de utilização do crédito, foram levantadas 18 variáveis para análise e possível utilização como features do modelo (caso a informação esteja disponível). Concluído em 24/08/2026
### Estruturação do dataset
O dataset sugerido pelo IA foi o UCI — Default of Credit Card Clients. Ele faz parte de um artigo cientifico em que foram testados seis métodos de análise de dados e decidiu-se, de acordo com a metodologia adotada, que o modelo da rede neural apresentou o melhor resultado. Para avaliar o melhor dos seis metodos, foi feita uma regressão linear para estimar o maior coeficiente de determinação. Para cada modelo foi criado um gráfico, em que Y foi colocada a probabilidade real de inadimplência (calculada a partir do modelo de regressão com dados de treino) e no eixo X foi colocada a probabilidade preditiva (provavelmente um valor não utilizado como dado de treino). As variáveis disponíveis no dataset foram:

* X1: Valor do crédito concedido 
* X2: Gênero (1 = masculino; 2 = feminino). 
* X3: Educação (1 = pós-graduação; 2 = universidade; 3 = ensino médio; 4 = outros). 
* X4: Estado civil (1 = casado; 2 = solteiro; 3 = outros). 
* X5: Idade (ano). 
* X6: status do pagamento de setembro de 2005 (feito com atraso ou antecipado? de quanto tempo?) 
* X7: status do pagamento de agosto de 2005
* X8: status do pagamento de julho de 2005
* X9: status do pagamento de junho de 2005
* X10: status do pagamento de maio de 2005
* X11: status do pagamento de abril de 2005 
* X12: valor da fatura em setembro de 2005 
* X13: valor da fatura em agosto de 2005 
* X14: valor da fatura em julho de 2005 
* X15: valor da fatura em junho de 2005 
* X16: valor da fatura em maio de 2005 
* X17: valor da fatura em abril de 2005 
* X18: valor pago em setembro de 2005 
* X19: valor pago em agosto de 2005
* X20: valor pago em julho de 2005 
* X21: valor pago em junho de 2005 
* X22: valor pago em maio de 2005 
* X23: valor pago em abril de 2005 

Sendo que X6 até x11 são variáveis categóricas 
A variável target foi um default = 1 ou default = 0 no mês seguinte 

Inicialmente definiu-se 6 meses de observação + 6 meses de performance para o cálculo do default, no entanto, o dataset oferece 6 meses de observação para o cálculo do default no mês seguinte, o que sugere que esse dataset não está de acordo com o embasamento teórico descrito no Business Card original. Optou-se por fazer mudanças no embasamento para se adequar ao dataset, o motivo principal é que este é o primeiro projeto de data science do autor, mas o Business Card original pode ser utilizado com outras bases de dados a depender das informações disponíveis. Concluído em 26/08/2026
