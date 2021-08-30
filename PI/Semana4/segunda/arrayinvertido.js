// let comidas = ['pastel', 'empada', 'pizza', 'lanche']

// function imprimirInverso() {
//   for (let i = 1; i <= comidas.length; i++) {
//     console.log(i + ' - ' + comidas[comidas.length - i])
//   }
// }

// imprimirInverso()

// let comidas = ['pastel', 'empada', 'pizza', 'lanche']

// function inverter(comidas) {
//   let inversoComidas = []
//   for (let i = 1; i <= comidas.length; i++) {
//     inversoComidas.push(comidas[comidas.length - i])
//   }
//   console.log(comidas)
//   console.log(inversoComidas)
// }

// inverter(comidas)

// function somarArray(array) {
//   let soma = 0
//   for (let i = 1; i <= array.length; i++) {
//     soma = soma + array[array.length - i]
//   }
//   console.log(soma)
// }

// somarArray([1, 2, 3, 9, 1, 5])

// function join(array) {
//   let palavra = ''
//   for (let i = array.length; i >= 1; i--) {
//     palavra = palavra + array[array.length - i]
//   }
//   console.log(palavra)
// }

// join(['m', 'a', 'r', 'i', 'a', 'n', 'a'])

let filmes = [
  'Star Wars',
  'Matrix',
  'Mr. Robot',
  'O preço do amanhã',
  'A vida é bela'
]

let filmes2 = [
  'Toy Story',
  'Finding Nemo',
  'Kung-fu Panda',
  'Wally',
  'Fortnite'
]

function juntarDoisArrays(array1, array2) {
  game = filmes2.pop(filmes2.length - 1)
  filmes = array1.concat(array2)
}

juntarDoisArrays(filmes, filmes2)

function letraMaiuscula(filme) {
  let filmesLetraMaiuscula = []
  for (let i = 1; i <= filme.length; i++) {
    filmesLetraMaiuscula.unshift(filmes[filmes.length - i].toUpperCase())
  }
  console.log(filmesLetraMaiuscula)
}

letraMaiuscula(filmes)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function comparaNotas(filme, notaAsia, notaEuro) {
  for (let i = 1; i < filme.length; i++) {
    if (notaAsia[i] == notaEuro[i]) {
      console.log(
        'Nota da asia: ' +
          notaAsia[i] +
          ' Nota da Europa: ' +
          notaEuro[i] +
          ' As notas do filme ' +
          filme[i] +
          ' são iguais'
      )
    } else {
      console.log(
        'Nota da asia: ' +
          notaAsia[i] +
          ' Nota da Europa: ' +
          notaEuro[i] +
          ' As notas do filme ' +
          filme[i] +
          ' são diferentes'
      )
    }
  }
}

comparaNotas(filmes, asiaScores, euroScores)
