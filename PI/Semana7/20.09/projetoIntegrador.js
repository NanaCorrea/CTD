// Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
// Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:
// Calcular o lucro total de todos os produtos;
// Permitir pesquisar um produto pelo nome e calcular seu lucro total;
// Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
//  Classifique todos os produtos pela quantidade de dinheiro que geraram.
// Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
// Calcule o lucro total após pagar 45% do lucro em impostos.


let controleDeVendas = [
    {nome: "cenoura",
    preço: 1.5,
    quantidade: 20,
    lucro: function() {return this.preço * this.quantidade}, // Calcular o lucro total de todos os produtos;
    lucroTotal: function() {return (this.lucro() / 100) * 55}}, // Calcule o lucro total após pagar 45% do lucro em impostos.
    {nome: "tomate",
    preço: 2.5,
    quantidade: 30,
    lucro: function() {return this.preço * this.quantidade}, // Calcular o lucro total de todos os produtos;
    lucroTotal: function() {return (this.lucro() / 100) * 55}}, // Calcule o lucro total após pagar 45% do lucro em impostos.
    {nome: "espinafre",
    preço: 3,
    quantidade: 50,
    lucro: function() {return this.preço * this.quantidade}, // Calcular o lucro total de todos os produtos;
    lucroTotal: function() {return (this.lucro() / 100) * 55}}, // Calcule o lucro total após pagar 45% do lucro em impostos.
    {nome: "cebola",
    preço: 1,
    quantidade: 10,
    lucro: function() {return this.preço * this.quantidade}, // Calcular o lucro total de todos os produtos;
    lucroTotal: function() {return (this.lucro() / 100) * 55}} // Calcule o lucro total após pagar 45% do lucro em impostos.
]

// Permitir pesquisar um produto pelo nome e calcular seu lucro total;
function lucroTotal(produto) {
    let produtos = controleDeVendas.find(function(itens) {
        return itens.nome == produto
    })
    if (produtos.nome == produto) {
        console.log('O lucro total do produto ' + produtos.nome + ' é de ' + produtos.lucro());
    }else {
        console.log('Produto não encontrado');
    }
}

lucroTotal("cenoura")

// Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
function venderamMais(valor) {
    let vendeuMais = []
    controleDeVendas.filter(elemento => {
        if(elemento.lucro() >= valor) {
            vendeuMais.push(elemento.nome)
        }
    })
    console.log(vendeuMais);
}

venderamMais(50)

//  Classifique todos os produtos pela quantidade de dinheiro que geraram.
controleDeVendas.sort((a,b) => {
    if (a.lucro() > b.lucro()) {
        return -1
    }else {
        return 0
    }
})

console.log(controleDeVendas);

// Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
function localizaProduto(produto, valor) {
    controleDeVendas.find(produtos => {
        if(produto == produtos.nome) {
            produtos.preço = valor
            console.log(produtos);
        }
    })
}

localizaProduto("cenoura", 200)