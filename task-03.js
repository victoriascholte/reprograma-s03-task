// 3 - Crie um algoritmo que receba três notas 
// de um aluno, calcule sua média e mostre as 
// seguintes mensagens de acordo com cada situação:

//   - Se a media for igual ou maior que 7 - Aprovado
//   - Se a media for maior e igual a cinco e menor que 7 - Recuperação
//   - Se a media for menor que 5 - Reprovado


  function finalResult(num1, num2, num3) {
    const media = ((num1 + num2 + num3) / 3)

    if (media >= 7 && media <= 10) {
        return "Aprovado."
    } else if (media < 7 && media >= 5) {
        return "Recuperação."
    } else if (media < 4 && media >= 0) {
        return "Reprovado."
    } else {
        return "Tente novamente."
    }
 }
 
 console.log(finalResult(9,9,10))
 console.log(finalResult(7,7,3))
 console.log(finalResult(1,2,4))