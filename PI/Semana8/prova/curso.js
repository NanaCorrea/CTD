const listAlunos = require('./listaDeAlunos')

let curso = {
  nome: 'JavaScript',
  notaAprovacao: 7,
  faltasMaximas: 4,
  listaAlunos: listAlunos,
  adicionarAlunos: function (aluno) {
    this.listaAlunos.push(aluno)
  },
  avaliaAluno: function (aluno) {
    if (
      aluno.calcularMedia() >= this.notaAprovacao &&
      aluno.faltas < this.faltasMaximas
    ) {
      return true
    } else if (
      aluno.calcularMedia() >= this.notaAprovacao &&
      aluno.faltas == this.faltasMaximas
    ) {
      let nota = this.notaAprovacao * 1.1
      if (aluno.calcularMedia() > nota) {
        return true
      }
      return false
    }
    return false
  },
  aprovados: function () {
    let alunosAprovados = []

    this.listaAlunos.forEach(aluno => {
      alunosAprovados.push(this.avaliaAluno(aluno))
    })

    return alunosAprovados
  }
}

console.log(curso.avaliaAluno(listAlunos[0]))
console.log(curso.aprovados())
