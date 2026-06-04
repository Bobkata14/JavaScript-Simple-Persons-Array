// Simple persons arry
const persons = [
    {name: 'Bobby', age: 23, city: 'Barcelona'},
    {name: 'Elly', age: 20, city: 'Barcelona'},
    {name: 'Valentine', age: 18, city: 'Milano'},
    {name: 'Anelia', age: 26, city: 'Milano'}
];

//function to filter persons by city
function getData(persons, targetCity) {
    return persons.filter(persons => persons.city === targetCity);
}

// Example usage
const targetCity = 'Barcelona';
const peopleInCity = getData(persons, targetCity);

console.log('People in ${targetCity}:', peopleInCity);