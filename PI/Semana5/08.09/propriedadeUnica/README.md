Propriedade Única
Você deve criar uma função chamada propriedadeUnica que recebe uma array de
objetos como parâmetro e uma string. Você deve devolver um novo array de objetos,
tendo apenas a propriedade que foi passada como string.
exemplo:
let array = [ { nome: &quot;Lean&quot;, idade: 27 }, { nome: &quot;Eze&quot;, idade: 49} ]

4

propriedadeUnica(array, &quot;idade&quot;) deve retornar [ { idade: 27 }, { idade: 49 } ]
propriedadeUnica(array, &quot;nome&quot;) deve retornar [ { nome: &quot;Lean&quot;}, { nome: &quot;Eze&quot; } ]
