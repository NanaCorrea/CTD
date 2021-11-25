/*1. Liste o nome das empresas de correio, a quantidade de clientes e o valor total do transporte. Inclua todas as empresas de correio que realizaram alguma operação.*/

SELECT co.Empresa, COUNT(f.ClienteID) AS QtdCliente, SUM(coalesce(f.Transporte,0)) AS Total_Transporte
FROM correios AS co
INNER JOIN faturas AS f ON co.CorreioID = f.FormaEnvio
GROUP BY co.Empresa;

/*2. Liste as informações de contato (ou, endereço, etc.) dos clientes que fizeram compras. 
Exiba as informações no formato considerado mais adequado. Por exemplo: <endereço> (CP: < CEP>) . 
Atente para não exibir clientes repetidos e ordene os clientes de forma ascendente..*/

/*3. Liste todas as categorias, a descrição e a quantidade de produtos existentes de cada categoria. 
Neste relatório deve aparecer apenas categorias que possuam produtos vinculados.*/
