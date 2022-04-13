// 5 - Crie uma função que recebe o ano de nascimento 
// da pessoa informando se ela é maior de idade ou menor.

function verifyAge(year) {
    if (year < 2002){
        return "Essa pessoa é maior de idade."
    }
    else if (year >= 2004) {
        return "Essa pessoa é menor de idade."
    }
}

console.log(verifyAge(1923))
console.log(verifyAge(2004))