'use strict';


const Person = function(firstName , birthYear){
// Instance properties
this.firstName = firstName;
this.birthYear = birthYear;

//Never to this
//this.calcAge = function() {
 //   ....console.log(2037 - this.birthYear);
//..};
//};

const shivi = new Person ('Shivi', 1991);
console.log(shivi);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const megha = new Person('Megha', 2017);
const nir = new Person('Nir', 1975);
console.log(megha, nir);

console.log(shivi instanceof Person);


