// 2 - Elabore um algoritmo que receba dois números 
// e determine qual é o maior entre eles, 
// se os números forem iguais, mostre uma 
// mensagem no console "Os números são iguais".

function numberComparison(num1, num2) {
   if (num1 > num2) {
       return `${num1} é maior do que ${num2}`
   }
   else if (num1 < num2) {
       return `${num2} é maior do que ${num1}`
   }
   else if (num1 === num2) {
       return `Os números são iguais.`
   }
}

console.log(numberComparison(1,2))
console.log(numberComparison(9,3))
console.log(numberComparison(7,7))