let people = [
  {name: 'Erik', age: 28},
  {name: 'Georg', age: 30},
  {name: 'Brian', age: 22},
  {name: 'Alex', age: 43},
  {name: 'Rafael', age: 31}
];

const edad = 30 // Indicar aca la edad a filtrar

const mayor = people.filter(function (people) {
  return people.age >= edad
});

console.log('Los mayores son:', mayor);