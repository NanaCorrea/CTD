// 1. Programa em Javascript que mostra os números ímpares. Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.

let i = 1
while (i < 100) {
  console.log(i)
  i += 2
}

// 2. Programa em Javascript que mostra os números pares
// Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.
let x = 1
while (x < 100) {
  if (x % 2 == 0) {
    console.log(x)
  }
  x++
}

// 3. Programa em Javascript que mostra os números pares e ímpares
// Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.
function ParOuImpar() {
  let y = 1
  console.log('Números Pares')
  while (y < 100) {
    if (y % 2 == 0) {
      console.log(y)
    }
    y++
  }
  console.log('Números ímpares')
  let i = 1
  while (i < 100) {
    console.log(i)
    i += 2
  }
}

ParOuImpar()

// 4. Programa em Javascript que calcula a média das notas de uma turma
// Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
// Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
// Por fim, o programa mostra a média aritmética da turma.

const alunos = require('prompt-sync')()

const qtdAlunos = alunos('Quantos alunos tem na sua turma?')
console.log(`A turma tem ${qtdAlunos} alunos`)

let z = 0
let arrayNotas = []
while (z < qtdAlunos) {
  const notas = require('prompt-sync')()

  const notaAluno = notas('Qual a nota do aluno?')
  arrayNotas.push(Number(notaAluno))
  console.log(`A nota do aluno é ${notaAluno}`)
  z++
}

function mediaNotas(arrayNotas) {
  let soma = 0
  for (let i = 0; i < arrayNotas.length; i++) {
    soma = soma + arrayNotas[i]
  }
  media = soma / arrayNotas.length
  console.log(`A média aritmética das notas da turma é ${media}`)
}

mediaNotas(arrayNotas)
