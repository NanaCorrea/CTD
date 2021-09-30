const Aluno = require('./aluno')

let aluno1 = new Aluno('Ualace', 4, [10, 8, 10, 10])
let aluno2 = new Aluno('Mariana', 1, [10, 8, 5, 10])
let aluno3 = new Aluno('Dharuan', 10, [0, 5, 7, 2]) // re
let aluno4 = new Aluno('Ewerton', 0, [10, 5, 7, 0]) // re
let aluno5 = new Aluno('Leandro', 3, [10, 10, 7, 10])
let aluno6 = new Aluno('Pedro', 9, [10, 0, 7, 0]) // re

let lista = []

lista.push(aluno1)
lista.push(aluno2)
lista.push(aluno3)
lista.push(aluno4)
lista.push(aluno5)
lista.push(aluno6)

module.exports = lista
