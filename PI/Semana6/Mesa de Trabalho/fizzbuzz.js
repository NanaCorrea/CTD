function fizzBuzz (num1, num2, word1, word2) {
  for (i= 0; i <= 100; i++) {
    if (i % num1 == 0 && i % num2 == 0) {
      console.log(i + " É " + word1 + " e " + word2);
    }
    else if (i % num1 == 0) {
      console.log(i + " É " + word1);
    }
    else if (i % num2 == 0) {
      console.log(i + " É " + word2);
    } else {
      console.log(i + " Não é múltiplo de nenhum dos números.");
    }
  }
}

fizzBuzz(2,3, "Múltiplo do Primeiro Número", "Múltiplo do Segundo Número")