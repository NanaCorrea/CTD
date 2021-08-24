function adicionar(x, y) {
    return x + y
}

function subtrair(x, y) {
    return x - y
}

function multiplicar(x, y) {
    return x * y
}

function dividir(x, y) {
    return x / y
}

console.log('----------Teste de Operações / Calculadora----------')

console.log(adicionar(2, 3))
console.log(subtrair(2, 3))
console.log(multiplicar(2, 3))
console.log(dividir(0, 2))

function quadradoDoNumero(x) {
    return 'O valor é: ' + x + '. O valor ao quadrado é: ' + multiplicar(x, x)
}

console.log(quadradoDoNumero(2))

function mediaDeTresNumeros(x, y, z) {
    let soma1 = adicionar(x, y)
    let soma2 = adicionar(soma1, z)
    return dividir(soma2, 3)
}

console.log('A média dos três números é de: ' + mediaDeTresNumeros(7, 2, 2))

function calculaPorcentagem(x, y) {
    let divisao = dividir(x, 100)
    return multiplicar(divisao, y)
}

console.log('A porcentagem é de: ' + calculaPorcentagem(300, 15))

function geradorDePorcentagem(x, y) {
    multiplicar = x * 100
    return dividir(multiplicar, y)
}

console.log('A porcentagem é de: ' + geradorDePorcentagem(200, 800))