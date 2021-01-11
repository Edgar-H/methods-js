let people = [
  {name: 'Erik', age: 28, reside: 'Queretaro'},
  {name: 'Georg', age: 30, reside: 'Guadalajara'},
  {name: 'Brian', age: 22, reside: 'CDMX'},
  {name: 'Alex', age: 43, reside: 'CDMX'},
  {name: 'Rafael', age: 31, reside: 'EDOMEX'}
];

let result = _.pluck(people, 'reside'); //Cambiar a name, age o reside para cambiar filtro
console.log(result);