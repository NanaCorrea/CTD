function Estudante(nome, faltas, notas) {
  this.nome = nome
  this.faltas = faltas
  this.notas = notas

  this.calcularMedia = function () {
    let resultado =
      (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4
    return resultado
  }
  this.adicionarFaltas = function () {
    this.faltas++
  }
}

module.exports = Estudante
