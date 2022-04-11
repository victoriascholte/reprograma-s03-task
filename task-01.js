// 1 - Elabore um algoritmo que receba um 
// número (1-7) e devolva o dia da semana 
// correspondente.

// função usando if

  let day = 0
  function corespondentDay(day) {
    if (day == 1) {
      return 'segunda-feira'
    }
    else if (day == 2) {
      return "terça-feira"
    }
    else if (day == 3) {
      return "quarta-feira"
    }
    else if (day == 4) {
      return "quinta-feira"
    }
    else if (day == 5) {
      return "sexta-feira"
    }
    else if (day == 6) {
    return "sábado"
    }
    else if (day == 7) {
    return "domingo"
    }
    else {
      return "dia não encontrado"
    }
}

  console.log (corespondentDay(1))
  console.log (corespondentDay(2))
  console.log (corespondentDay(3))
  console.log (corespondentDay(4))
  console.log (corespondentDay(5))
  console.log (corespondentDay(6))
  console.log (corespondentDay(7))
  console.log (corespondentDay(8))

