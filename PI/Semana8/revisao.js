function Student(nome, faltas, notas) {
  this.nome = nome
  this.faltas = faltas
  this.notas = notas
}

let students = []

students.push(new Student('Marcelo', 1, [7, 8, 9, 10]))
students.push(new Student('Lucas', 1, [7, 8, 9, 10]))

module.exports = students
