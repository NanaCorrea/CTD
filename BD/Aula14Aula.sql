use emarket;

SELECT*FROM provedores;
SELECT*FROM produtos;

SELECT provedores.Pais, produtos.ProdutoNome, produtos.PrecoUnitario FROM provedores
INNER JOIN produtos
ON provedores.ProvedorID = produtos.ProvedorID;

SELECT provedores.Pais, max(produtos.PrecoUnitario) FROM provedores
INNER JOIN produtos
ON provedores.ProvedorID = produtos.ProvedorID
GROUP BY provedores.Pais;

SELECT provedores.Pais, produtos.ProdutoNome, produtos.PrecoUnitario FROM provedores
INNER JOIN produtos
ON provedores.ProvedorID = produtos.ProvedorID
WHERE produtos.PrecoUnitario > (SELECT AVG(produtos.Precounitario) FROM produtos);

SELECT provedores.Pais, max(produtos.PrecoUnitario) FROM provedores
INNER JOIN produtos
ON provedores.ProvedorID = produtos.ProvedorID
WHERE produtos.PrecoUnitario > (SELECT AVG(produtos.Precounitario) FROM produtos)
GROUP BY provedores.Pais;

SELECT provedores.Pais, max(produtos.PrecoUnitario) FROM provedores
INNER JOIN produtos
ON provedores.ProvedorID = produtos.ProvedorID
WHERE produtos.PrecoUnitario > (SELECT AVG(produtos.Precounitario) FROM produtos)
GROUP BY provedores.Pais
HAVING provedores.Pais = 'USA';