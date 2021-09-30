// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

function Curso(nome, nota, faltas, students) {
  this.nome = nome
  this.nota = nota
  this.faltas = faltas
  this.estudantes = students
}

let students = require('./revisao')

let curso = new Curso('Digital House', 7, 2)

console.log(curso)
