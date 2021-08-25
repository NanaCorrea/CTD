function podeSubir(altura, acompanhada) {
    let ok
    if ((altura > 1.40) && (altura < 2.0)) {
        ok = true
        console.log("Acesso autorizado.")
    } else if ((altura < 1.40) && (acompanhada == true)) {
        ok = true
        console.log("Acesso autorizado somente com acompanhante.")
    } else {
        ok = false
        console.log("Acesso negado.")
    }
    console.log(ok)
}
podeSubir(1.30, true)

// function podeSubir(altura, acompanhada) {
//     let ok
//     if (((altura > 1.40) && (altura < 2.0)) || ((altura < 1.40) && (acompanhada == true))) {
//         ok = true
//     } else {
//         ok = false
//     }
//     console.log(ok)
// }
// podeSubir(1.70, false)