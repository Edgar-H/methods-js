let people = [
  {name: 'Erik', lastName: 'Perez'},
  {name: 'Georg', lastName: 'Berger'},
  {name: 'Brian', lastName: 'Oledo'},
  {name: 'Alex', lastName: 'Ochoa'},
  {name: 'Rafael', lastName: 'Rojas'}
];

function nameCompleted(people) {
  return people.name + ' ' + people.lastName;
}

let names = people.map(nameCompleted);
console.log(names);