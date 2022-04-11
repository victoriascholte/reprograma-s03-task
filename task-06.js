// 6 - crie um algoritmo que converte dias em horas, 
// quando recebe um número de dias.


function hoursToDays(day) {
    const hours = day * 24
    return `O número de horas correspondente à ${day} dias é ${hours}`
}

console.log(hoursToDays(60))