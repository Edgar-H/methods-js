let numbers = [10, 20, 30, 40, 50];

let serch = 30 // Indicar el numero a buscar

const match = numbers.findIndex(function (number) {
  return number === serch;
})
console.log('El numero', serch, 'se encuentra en la posicion', match);