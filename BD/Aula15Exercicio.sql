USE emarket;

/*1. Liste os clientes que fizeram compras durante 1996.
A lista deve conter as seguintes colunas:
Nome e sobrenome. 
O título é todo maiúsculo.*/

SELECT left(c.Contato, locate(' ', c.Contato)) AS nome,  substring(c.contato, locate(' ',c.Contato), length(c.contato)) as Sobrenome, upper(c.Titulo)
FROM clientes AS c
INNER JOIN faturas AS f ON c.ClienteID = f.ClienteID
WHERE f.DataFatura < '1996-12-31';

/*2. Liste as faturas para as quais a remessa foi para uma cidade diferente da cidade do cliente. 
Considere apenas os clientes do Reino Unido.
A listagem deve incluir:
O número da fatura completando com zeros principais 8 itens. Por exemplo, 00001234
A data da fatura no formato YYYY-MM-DD. Por exemplo, 1996-12-01
Para a cidade do cliente*/

SELECT right(concat("00000000",f.FaturaId),8) AS NFatura,
DATE_FORMAT(f.DataFatura, '%Y-%m-%d') AS DF, c.Cidade AS Cidade_Cliente, f.CidadeEnvio AS Cidade_Fatura, c.Pais AS Pais
FROM faturas AS f
INNER JOIN clientes AS c on c.ClienteID = f.ClienteID
WHERE c.Cidade <> f.CidadeEnvio AND c.Pais = 'UK';
