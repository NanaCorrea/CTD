USE musimundos;

CREATE VIEW faturas_nacionais5 AS SELECT faturas.id, faturas.data_fatura, clientes.nome, clientes.sobrenome, faturas.valor_total, faturas.pais_cobranca
FROM faturas
INNER JOIN clientes ON faturas.id_cliente = clientes.id
WHERE faturas.pais_cobranca IN ('Brazil')
GROUP BY clientes.id;

SELECT * FROM faturas_nacionais5;

CREATE VIEW latinos12 AS SELECT artistas.nome AS Artista_Nome, albuns.titulo AS Album_Titulo, cancoes.nome AS Musica_Nome, generos.nome AS genero
FROM artistas
INNER JOIN albuns ON albuns.id_artista = artistas.id
INNER JOIN cancoes ON cancoes.id_album = albuns.id
INNER JOIN generos ON generos.id = cancoes.id_genero
WHERE generos.nome IN ('Latin')
ORDER BY Artista_Nome, Musica_Nome;

SELECT * FROM latinos12;

 
/* Crie uma View chamada Faturas_Brazil, que exiba o nome e sobrenome dos clientes, o país de cobrança e a soma das faturas dos clientes cujo país de cobrança 
seja ‘Brazil’. Execute a view e responda: Qual o valor da fatura mais cara? */

CREATE VIEW faturas_brazil2 AS SELECT clientes.nome, clientes.sobrenome, faturas.pais_cobranca, SUM(faturas.valor_total)
FROM clientes
INNER JOIN faturas ON clientes.id = faturas.id_cliente
WHERE faturas.pais_cobranca IN ('Brazil')
GROUP BY clientes.nome, clientes.sobrenome
ORDER BY SUM(valor_total) DESC;

SELECT * FROM faturas_brazil2;

CREATE VIEW faturas_brazil53 AS SELECT clientes.nome, clientes.sobrenome, faturas.pais_cobranca, sum(faturas.valor_total) AS valor_fatura
FROM clientes
INNER JOIN faturas ON clientes.id = faturas.id_cliente
GROUP BY clientes.id
HAVING faturas.pais_cobranca IN ('Brazil')
ORDER BY valor_fatura DESC;

SELECT * FROM faturas_brazil53;