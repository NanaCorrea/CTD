function acaoCarro(callback1, callback2) {
  callback1()
  callback2()
}

const andar = () => console.log('O carro está andando!')
const parar = () => console.log('O carro parou!')

acaoCarro(andar, parar)
