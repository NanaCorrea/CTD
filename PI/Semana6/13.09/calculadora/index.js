let soma = require('./soma')
let subtracao = require('./sub')
let multiplicacao = require('./multi')
let divisao = require('./div')
let json = require('./testejson')

console.log('Soma: ' + soma(6, 2))
console.log('Subtração: ' + subtracao(6, 2))
console.log('Multiplicação: ' + multiplicacao(6, 2))
console.log('Divisão: ' + divisao(6, 2))
console.log('Nome da gata: ' + json.nome + 'Cor: ' + json.cor + 'Apelido: ' + json.apelido);