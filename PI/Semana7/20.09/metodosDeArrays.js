// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let pares = [0,2,4,6,8]

let impares = pares.map(num => num +1)

console.log(impares);

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ["Fernanda", "Maria", "Pietra", "Roberta", "Mariana", "Luiza", "Maria"]

let marias = nomes.filter(nome => nome == "Maria")

console.log(marias)

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

let numeros = [1,2,3,4,5,6,7,8,9]

let numerosFormatados = numeros.reduce((acumulador, numero) => acumulador + " - " + numero)

console.log(numerosFormatados);

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ["Gato", "Cachorro", "Porquinho da índia", "Cavalo", "Coelho"]

let animal = animais.forEach(animal => console.log("O animal é " + animal))