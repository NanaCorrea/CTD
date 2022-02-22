let input = prompt('Slecione uma das opções: [1] Pedra || [2] Papel || [3] Tesoura')
let usuario = parseInt(input, 10)
let resultado = parseInt(Math.random() * 3 +1, 10)

let resultado

if(usuario === 1) {
    if(computador === 1) {
        resultado = "Empate"
    }
    if(computador === 2) {
        resultado = "Perdeu"
    }
    if(computador === 3) {
        resultado= 'Vitória!'
    }
}

if(usuario === 2) {
    if(computador === 2) {
        resultado = "Empate"
    }
    if(computador === 3) {
        resultado = "Perdeu"
    }
    if(computador === 1) {
        resultado= 'Vitória!'
    }
}

if(usuario === 3) {
    if(computador === 3) {
        resultado = "Empate"
    }
    if(computador === 1) {
        resultado = "Perdeu"
    }
    if(computador === 2) {
        resultado= 'Vitória!'
    }
}
alert(resultado)