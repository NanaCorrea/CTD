function adicionar(x, y) {
    return 'O primeiro valor é: ' + x + '. O segundo valor é: ' + y + '. O resultado da adição é: ' + (x + y)
}

function subtrair(x, y) {
    return 'O primeiro valor é: ' + x + '. O segundo valor é: ' + y + '. O resultado da subtração é: ' + (x - y)
}

function multiplicar(x, y) {
    return 'O primeiro valor é: ' + x + '. O segundo valor é: ' + y + '. O resultado da multiplicação é: ' + (x * y)
}

function dividir(x, y) {
    return 'O primeiro valor é: ' + x + '. O segundo valor é: ' + y + '. O resultado da divisão é: ' + (x / y)
}

console.log('----------Teste de Operações / Calculadora----------')

console.log(adicionar(2, 3))
console.log(subtrair(2, 3))
console.log(multiplicar(2, 3))
console.log(dividir(0, 2))

