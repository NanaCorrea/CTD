let numeros = [1,2,4,8]
let inicial = 0

let soma = numeros.reduce((valorAnterior, valorAtual) => 
    valorAnterior + valorAtual, inicial
)

console.log(soma);