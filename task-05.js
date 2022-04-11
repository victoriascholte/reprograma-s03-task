// 5 - Crie uma função que recebe o ano de nascimento 
// da pessoa informando se ela é maior de idade ou menor.

function verifyAge(age) {
    if (age >= 18){
        return "Essa pessoa é maior de idade."
    }
    else if (age < 18) {
        return "Essa pessoa é menor de idade."
    }
}

console.log(verifyAge(23))
console.log(verifyAge(4))