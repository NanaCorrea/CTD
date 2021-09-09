let facebook = {
  Nome: 'Mariana',
  Idade: '33'
}

let Gato = {
  cor: 'preto e branco',
  nome: 'Morgana',
  olhos: 'Verdes',
  comida: 'Petisco',
  miar: function () {
    return 'Me dá ' + this.comida + '. Miauuu!!!'
  }
}

console.log(Gato.miar())
