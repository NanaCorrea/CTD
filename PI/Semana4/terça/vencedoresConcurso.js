let playerA = [5, 8, 4, 9, 5]
let playerB = [8, 7, 8, 6, 8]
let playerC = [7, 5, 10, 8, 3]

function pontuacaoMedia(player) {
  let soma = 0
  for (let i = 0; i < player.length; i++) {
    soma = soma + player[i]
  }
  return soma / player.length
}

function pontuacaoMaior(numArray) {
  return Math.max.apply(null, numArray)
}

function competicao(player1, player2, player3) {
  let pontuacaoMaiorPlayerA = pontuacaoMaior(player1)
  let pontuacaoMaiorPlayerB = pontuacaoMaior(player2)
  let pontuacaoMaiorPlayerC = pontuacaoMaior(player3)

  if (
    pontuacaoMaiorPlayerA > pontuacaoMaiorPlayerB &&
    pontuacaoMaiorPlayerA > pontuacaoMaiorPlayerC
  ) {
    console.log(
      `Pontuação do Player 1: ${pontuacaoMaiorPlayerA}. Pontuação do Player 2: ${pontuacaoMaiorPlayerB}. Pontuação do Player 3: ${pontuacaoMaiorPlayerC}. O Player 1 ganhou na categoria maior pontuação.`
    )
  } else if (
    pontuacaoMaiorPlayerB > pontuacaoMaiorPlayerA &&
    pontuacaoMaiorPlayerB > pontuacaoMaiorPlayerC
  ) {
    console.log(
      `Pontuação do Player 1: ${pontuacaoMaiorPlayerA}. Pontuação do Player 2: ${pontuacaoMaiorPlayerB}. Pontuação do Player 3: ${pontuacaoMaiorPlayerC}. O Player 2 ganhou na categoria maior pontuação.`
    )
  } else {
    console.log(
      `Pontuação do Player 1: ${pontuacaoMaiorPlayerA}. Pontuação do Player 2: ${pontuacaoMaiorPlayerB}. Pontuação do Player 3: ${pontuacaoMaiorPlayerC}. O Player 3 ganhou na categoria maior pontuação.`
    )
  }

  let pontuacaoMediaPlayerA = pontuacaoMedia(player1)
  let pontuacaoMediaPlayerB = pontuacaoMedia(player2)
  let pontuacaoMediaPlayerC = pontuacaoMedia(player3)

  if (
    pontuacaoMediaPlayerA > pontuacaoMediaPlayerB &&
    pontuacaoMediaPlayerA > pontuacaoMediaPlayerC
  ) {
    console.log(
      `Pontuação do Player 1: ${pontuacaoMediaPlayerA}. Pontuação do Player 2: ${pontuacaoMediaPlayerB}. Pontuação do Player 3: ${pontuacaoMediaPlayerC}. O Player 1 ganhou na categoria pontuação média.`
    )
  } else if (
    pontuacaoMediaPlayerB > pontuacaoMediaPlayerA &&
    pontuacaoMediaPlayerB > pontuacaoMediaPlayerC
  ) {
    console.log(
      `Pontuação do Player 1: ${pontuacaoMediaPlayerA}. Pontuação do Player 2: ${pontuacaoMediaPlayerB}. Pontuação do Player 3: ${pontuacaoMediaPlayerC}. O Player 2 ganhou na categoria pontuação média.`
    )
  } else {
    console.log(
      `Pontuação do Player 1: ${pontuacaoMaiorPlayerA}. Pontuação do Player 2: ${pontuacaoMaiorPlayerB}. Pontuação do Player 3: ${pontuacaoMaiorPlayerC}. O Player 3 ganhou na categoria pontuação média.`
    )
  }
}

competicao(playerA, playerB, playerC)
