function Account(number, type, balance, owner) {
  this.number = number
  this.type = type
  this.balance = balance
  this.owner = owner
}

let Jobi = new Account(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus')

let Abigael = new Account(5486273622, 'Conta Corrente', 27771, 'Abigael Natte')

let Thomasin = new Account(
  4223508636,
  'Conta Corrente',
  2177,
  'Thomasin Latour'
)

let Alonso = new Account(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan')

let Bendite = new Account(
  2138105881,
  'Conta Poupança',
  33196,
  'Bendite Huggett'
)

let Ramon = new Account(1183971869, 'Conta Poupança', 8675, 'Ramon Connell')

let Jarret = new Account(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente')

let Ansel = new Account(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley')

let Jacki = new Account(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer')

let Lonnie = new Account(
  185979521,
  'Conta Poupança',
  25994,
  'Lonnie Verheijden'
)

let objectsList = [
  Abigael,
  Alonso,
  Ansel,
  Bendite,
  Jacki,
  Jarret,
  Jobi,
  Lonnie,
  Ramon,
  Thomasin
]

let banco = {
  clientes: objectsList,
  consultarCliente: function (titular) {
    let accountIndex = objectsList.indexOf(titular)
    return accountIndex
  },
  deposito: function (titular, dinheiro) {
    let accountIndex = this.consultarCliente(titular)
    let accountTitular = this.clientes[accountIndex]
    accountTitular.balance = accountTitular.balance + dinheiro
    console.log(
      'Depósito realizado, seu novo saldo é: ' + accountTitular.balance
    )
  },
  saque: function (titular, dinheiro) {
    let accountIndex = this.consultarCliente(titular)
    let accountTitular = this.clientes[accountIndex]
    accountTitular.balance = accountTitular.balance - dinheiro
    accountTitular.balance >= 0
      ? console.log(
          'Saque realizado com sucesso, seu novo saldo é: ' +
            accountTitular.balance
        )
      : console.log('Fundos insuficientes')
  }
}

banco.saque(Abigael, 3)
