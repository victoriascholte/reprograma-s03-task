// 4 - Crie uma função que retorna a 
// palavra (impar/par) de acordo com seu parâmetro.

function oddOrEven(num) {
    if (num % 2 == 0) {
        return "Par"
    }
    else {
        return "Ímpar"
    }
}
console.log(oddOrEven(2))
console.log(oddOrEven(3))