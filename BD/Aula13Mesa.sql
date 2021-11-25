USE musimundos;

-- Na tabela faturas:
-- 1 - O valor da fatura mais alta cujo a cidade de cobrança é “Oslo”. (MAX)
SELECT max(valor_total) from faturas WHERE cidade_cobranca = 'Oslo';
-- 2 - O valor da fatura mais baixa de todas. (MIN)
SELECT min(valor_total) from faturas;
-- 3 - O valor médio das faturas que o país de cobrança é “Canada”. (AVG)
SELECT avg(valor_total) from faturas WHERE pais_cobranca = 'Canada';
-- 4 - A quan8tidade de faturas que o país de cobrança é “Canada”. (COUNT)
select COUNT(*) from faturas where pais_cobranca = 'Canada';
-- 5 - O valor total somado de todas as faturas. (SUM)
select sum(valor_total) from faturas;
-- 6 - Selecione o id, a data e valor das faturas com valor abaixo da média. (Subqueries e AVG)
select id, data_fatura, valor_total from faturas where valor_total < (select avg(valor_total) from faturas);
-- Na tabela empregados:
-- 7 - A data de nascimento do funcionário mais jovem da empresa (MAX)
SELECT max(data_nascimento) from empregados;
-- 8 - A data de nascimento do funcionário mais velho da empresa (MIN)
SELECT min(data_nascimento) from empregados;
-- 9 - Formate a data do nascimento dos funcionários no formato ex: "02 May 2020". (DATE_FORMAT)
SELECT date_format(data_nascimento, "%d %M %Y") FROM empregados;

-- Na tabela cancoes:
-- 10 - O numero de cancoes que tem como compositor “AC/DC”. (COUNT)
SELECT count(*) FROM cancoes where compositor = 'AC/DC';
-- 11 - A duração média das músicas em milisegundos (AVG)
SELECT avg(duracao_milisegundos) from cancoes;
-- 12 - O tamanho médio em bytes das músicas que como compositor “AC/DC”. (AVG)
SELECT avg(bytes) from cancoes where compositor = 'AC/DC';

-- Na tabela clientes:
-- 13 - Quantidade de clientes que moram na cidade de “São Paulo”. (COUNT)
SELECT count(*) from clientes WHERE cidade = 'São Paulo';
-- 14 - Quantidade de clientes que moram na cidade “Paris”. (COUNT)
SELECT count(*) from clientes WHERE cidade = 'Paris';
-- 15 - Quantidade de clientes que tenham email do “yahoo”. (COUNT e LIKE)
SELECT count(*) from clientes WHERE email LIKE '%yahoo%';
