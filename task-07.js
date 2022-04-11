// 7 - Crie uma função que recebe 2 parâmetros 
// e retorna o resultado da divisão entre eles. 
// Além disso, se o resto dessa divisão for 
// zero deverá imprimir no console o valor e dizer 
// que ele é par.

function divideNumbers(num1, num2) {
    const division = num1 / num2
    if (num1 % num2 ==0) {
        return `O resultado da divisão é ${division} e o número é par.`
    } 
    else if (num1 % num2 != 0) {
        return `O resultado da divisão é ${division}.`
    }
    }

console.log(divideNumbers(10,4))
console.log(divideNumbers(10,5))