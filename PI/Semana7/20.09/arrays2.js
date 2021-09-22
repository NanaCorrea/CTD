// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().

let numeros = [1,2,3,4,5,6,7,8,9]

function divideSoma(numeros) {
    soma = numeros.reduce((soma, numero) => soma + numero) 
    divide = numeros.map(numero => numero / soma)
    return divide
}

console.log(divideSoma(numeros));

// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let comidas = ["Pastel", "Pizza", "Lasanha", "Maçã", "Mel"]

function palavraMaior(comidas, num) {
    let palavraMaior = comidas.filter(comida => comida.length > num)
    return palavraMaior;
}

console.log(palavraMaior(comidas, 5));

// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 

let alunos = [
{
    nome: "Mariana",
    nota: 10
},
{
    nome: "Ariana",
    nota: 7
},
{
    nome: "Juliana",
    nota: 9
},
{
    nome: "Erika",
    nota: 8
}]

function ordenaNotas(alunos) {
    let alunosNotas = alunos.slice()
    alunosNotas.sort((a,b) => {
        if(a.nota > b.nota) {
            return -1
        } else {
            return 0
        }
    })
    return alunosNotas
}

function ordenaNomes(alunos) {
    let alunosNomes = alunos.slice()
    alunosNomes.sort((a,b) => {
        if(a.nome < b.nome) {
            return -1
        } else {
            return 0
        }
    })
    return alunosNomes
}

console.log(ordenaNomes(alunos));
console.log(ordenaNotas(alunos));