// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.
let pessoas = [
  {
    sexo: 'f',
    altura: 120
  },
  {
    sexo: 'm',
    altura: 130
  },
  {
    sexo: 'f',
    altura: 140
  },
  {
    sexo: 'm',
    altura: 150
  },
  {
    sexo: 'f',
    altura: 160
  },
  {
    sexo: 'm',
    altura: 170
  },
  {
    sexo: 'f',
    altura: 180
  },
  {
    sexo: 'm',
    altura: 190
  },
  {
    sexo: 'm',
    altura: 200
  },
  {
    sexo: 'f',
    altura: 170
  },
  {
    sexo: 'm',
    altura: 220
  },
  {
    sexo: 'm',
    altura: 230
  },
  {
    sexo: 'f',
    altura: 160
  },
  {
    sexo: 'f',
    altura: 140
  },
  {
    sexo: 'm',
    altura: 150
  }
]

console.log('-----------------Exercício I-----------------')

function calculaAlturas(pessoas) {
  let alturas = pessoas.map(pessoa => pessoa.altura)
  let maiorAltura = alturas.reduce((acumulador, altura) => {
    if (acumulador > altura) {
      return acumulador
    } else {
      return altura
    }
  })
  console.log(`A maior altura é ${maiorAltura}`)
  let menorAltura = alturas.reduce((acumulador, altura) => {
    if (acumulador < altura) {
      return acumulador
    } else {
      return altura
    }
  })
  console.log(`A menor altura é ${menorAltura}`)
  let mulheres = pessoas.filter(pessoa => pessoa.sexo === 'f')
  let alturasMulheres = mulheres.map(mulher => mulher.altura)
  let mediaAlturaMulheres = alturasMulheres.reduce(
    (acumulador, altura) => (acumulador + altura) / 2
  )
  console.log(`A média de altura das mulheres é de ${mediaAlturaMulheres}`)
  let numeroHomens = pessoas.filter(pessoa => pessoa.sexo === 'm')
  console.log(`O número de homens é ${numeroHomens.length}`)
}
calculaAlturas(pessoas)

// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

// a média das idades das pessoas que responderam ótimo;

// a quantidade de pessoas que responderam regular;

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let espectadores = [
  { idade: 18, opnião: 1 },
  { idade: 19, opnião: 2 },
  { idade: 20, opnião: 3 },
  { idade: 21, opnião: 2 },
  { idade: 22, opnião: 3 },
  { idade: 23, opnião: 1 },
  { idade: 24, opnião: 1 },
  { idade: 25, opnião: 3 },
  { idade: 26, opnião: 2 },
  { idade: 27, opnião: 1 },
  { idade: 28, opnião: 2 },
  { idade: 29, opnião: 3 },
  { idade: 30, opnião: 3 },
  { idade: 31, opnião: 1 },
  { idade: 32, opnião: 2 }
]

console.log('-----------------Exercício II-----------------')

function cinema(espectadores) {
  let respostaOtimo = espectadores.filter(espectador => espectador.opnião === 3)
  let mediaIdadeOtimo = 0
  for (i = 0; i < respostaOtimo.length; i++) {
    mediaIdadeOtimo = (mediaIdadeOtimo + respostaOtimo[i].idade) / 2
  }
  console.log(
    `A média das idades das pessoas que responderam ótimo é ${mediaIdadeOtimo}`
  )
  let respostaRegular = espectadores.filter(
    espectador => espectador.opnião === 1
  )
  console.log(
    `A quantidade de pessoas que responderam regular é ${respostaRegular.length}`
  )
  let respostaBom = espectadores.filter(espectador => espectador.opnião === 2)
  let porcentagemBom = (100 / espectadores.length) * respostaBom.length
  console.log(
    `A porcentagem de pessoas que responderam bom entre todos os espectadores analisados é ${porcentagemBom}`
  )
}

cinema(espectadores)
