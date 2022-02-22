let comecar = confirm('Você quer jogar Pedra, Papel ou Tesoura?')
console.log(comecar);

if (comecar) {
    jogar()
} else {
    alert('Que pena! Quando quiser jogar, atualiza a página.')
}

function jogar() {
    var pontosJogador = 0
    var pontosComputador = 0
    var continua = true

    while (continua) {
        let jogador = parseInt(prompt('Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura'))

        while (jogador > 3 || jogador <= 0 || isNaN(jogador)) {
            jogador = parseInt(prompt('Opção escolhida inválida! Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura'))
        }
        
        let computador = parseInt(Math.random()*3+1)
        
        // Math.floor(Math.random() * 3)
        
        // while (computador == 0) {
        //     computador=Math.floor(Math.random()  * 3)
        // }

        if(jogador === 1) {
            if (computador === 1) {
                console.log('Você escolheu Pedra. O computador escolheu Pedra. Vocês empataram!');
            } else if (computador ===2 ) {
                console.log('Você escolheu Pedra. O computador escolheu Papel. Você perdeu!')
                pontosComputador +=1;
            } else {
                console.log('Você escolheu Pedra. O computador escolheu Tesoura. Você ganhou!')
                pontosJogador+=1;
            }
        }else if(jogador === 2) {
            if (computador === 2) {
                console.log('Você escolheu Papel. O computador escolheu Papel. Vocês empataram!');
            } else if (computador === 3 ) {
                console.log('Você escolheu Papel. O computador escolheu Tesoura. Você perdeu!')
                pontosComputador +=1;
            } else {
                console.log('Você escolheu Papel. O computador escolheu Pedra. Você ganhou!')
                pontosJogador+=1;
            }
        } else {
            if (computador === 3) {
                console.log('Você escolheu Tesoura. O computador escolheu Tesoura. Vocês empataram!');
            } else if (computador === 1 ) {
                console.log('Você escolheu Tesoura. O computador escolheu Pedra. Você perdeu!')
                pontosComputador +=1;
            } else {
                console.log('Você escolheu Tesoura. O computador escolheu Papel. Você ganhou!')
                pontosJogador+=1;
            }
        }
        if (pontosJogador > 2 || pontosComputador >2) {
            break
        }
    }
    if (pontosJogador == 3) {
        console.log('Parabéns! Você venceu!!!');
    } else {
        console.log('Você perdeu! Tente outra vez!!!');
    }
comecar = confirm('Você quer jogar de novo?')
console.log(comecar);

if (comecar) {
    jogar()
} else {
    alert('Que pena! Quando quiser jogar, atualiza a página.')
}
}

