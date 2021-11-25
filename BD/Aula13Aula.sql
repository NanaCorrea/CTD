USE emarket;

SELECT DataFatura FROM faturas;

SELECT date_format(DataFatura, '%d do %m de %y') FROM faturas;

SELECT count(DataFatura) from faturas;

SELECT MAX(DataFatura) from faturas;

SELECT MIN(DataFatura) from faturas;

SELECT avg(PrecoUnitario) from produtos;

SELECT ProdutoNome, PrecoUnitario FROM produtos
WHERE PrecoUnitario > (SELECT std(PrecoUnitario) from produtos);