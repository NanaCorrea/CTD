let aluno = {
  nome: 'Arthur',
  número: 1,
  notas: [7, 8, 9, 10],
  media: 7,
  calculaMedia: function () {
    let soma = 0
    for (i = 0; i < this.notas.length; i++) {
      soma = soma + this.notas[i]
    }
    let media = soma / this.notas.length
    media >= this.media
      ? console.log('A média do aluno é: ' + media + '. O aluno foi aprovado')
      : console.log('A média do aluno é: ' + media + '. O aluno foi reprovado!')
  }
}

aluno.calculaMedia()
