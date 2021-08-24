function teste1(x, y) {
    return y - x
}

console.log(teste1(10, 40))

function teste2(x, y) {
    return x * 2
    console.log(x)
    return x / 2
}

console.log(teste2(10))

function convertePolegada(cm) {
    return (cm * 0.39)
}

console.log(convertePolegada(10))

function stringToURL(string) {
    return "https://www." + string + ".com.br"
}

console.log(stringToURL('mariana'))

function stringExclamacao(string) {
    return string + '!'
}

console.log(stringExclamacao('Os gatos são demais'))

function dogAge(age) {
    return age * 7
}

console.log(dogAge(2))

function salary(salary) {
    return salary / 160
}

console.log(salary(2000))

function upperCase(string) {
    return string.toUpperCase()
}

console.log(upperCase('Oi, testando'))

function type(data) {
    return typeof data
}

console.log(type('oi'))

function circunferencia(diametro) {
    return diametro * Math.PI
}

console.log(circunferencia(10.0))

var jose = new Map()

jose.set("Nome", "José")
jose.set("Sobrenome", "da Silva")
jose.set("Idade", 27)
jose.set("Peso (KG)", 83.5)
jose.set("Altura", 1.70)
jose.set("Plano", true)

jose.size
console.log(jose.size)

var nome = "Ana"
var sobrenome = "Ferreira"
var idade = 33
var peso = 63.7
var altura = 1.53
var plano = false
var imc = peso / (altura ** 2)

console.log(nome + " " + sobrenome + " tem " + idade + " anos e seu índice de massa corporal é de " + imc)