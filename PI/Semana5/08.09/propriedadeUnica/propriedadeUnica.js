let array = [
  { nome: 'Leon', idade: 27 },
  { nome: 'Eze', idade: 49 }
]

function propriedadeUnica(array, string) {
  let arrayNovo = []
  if (string == 'nome') {
    for (i = 0; i < array.length; i++) {
      nome = array[i].nome
      arrayNovo.push({ nome })
    }
    return arrayNovo
  } else {
    for (i = 0; i < array.length; i++) {
      idade = array[i].idade
      arrayNovo.push({ idade })
    }
    return arrayNovo
  }
}

console.log(propriedadeUnica(array, 'idade'))
