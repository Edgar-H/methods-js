let countries = [
  {id: 1, name: 'Mexico'},
  {id: 2, name: 'Colombia'},
  {id: 3, name: 'Canada'},
  {id: 4, name: 'Argentina'},
  {id: 5, name: 'España'},
  {id: 6, name: 'Alemania'}
];

let countryId= 4; // Indicar la id del pais a buscar

function findById(id) {
  return countries.find(function (country) {
    return country.id === id;
  });
}

console.log(findById(countryId));