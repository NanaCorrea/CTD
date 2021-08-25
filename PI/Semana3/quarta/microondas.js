let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

function microondas(comida, tempo) {
    if ((tempo >= comida) && (tempo <= (comida * 2))) {
        console.log("Prato pronto, bom apetite!!!")
    } else if (tempo >= (comida * 2) && (tempo <= (comida * 3))) {
        console.log("A comida queimou")
    } else if (tempo < comida) {
        console.log("Tempo insuficiente")
    } else if ((comida != pipoca) && (comida != macarrao) && (comida != carne) && (comida != feijao) && (comida != brigadeiro)) {
        console.log("Comida inexistente")
    } else if (tempo > (comida * 3)) {
        console.log("kabumm")
    } else {
        console.log("Ocorreu um erro")
    }
}

microondas(pipoca, 200)