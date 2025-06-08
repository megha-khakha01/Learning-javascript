'use strict';


// const Person = function(firstName , birthYear){
// // Instance properties
// this.firstName = firstName;
// this.birthYear = birthYear;

// //Never to this
// //this.calcAge = function() {
//  //   ....console.log(2037 - this.birthYear);
// //..};
// //};

// const shivi = new Person ('Shivi', 1991);
// console.log(shivi);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const megha = new Person('Megha', 2017);
// const nir = new Person('Nir', 1975);
// console.log(megha, nir);

// console.log(shivi instanceof Person);


// Prototypes
// console.log(personalbar.prototype);

// personalbar.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// shivi.calcAge();
// megha.calcAge();

// console.log(shivi._proto_);
// console.log(shivi._proto_===personalbar.prototype);

// console.log(personalbar.prototype.isPrototypeof(shivi));
// console.log(personalbar.prototype.isPrototypeof(matilda));
// console.log(personalbar.prototype.isPrototypeof(Person));

// //.prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(shivi.species, megha.species);

// console.log(sivi.hasOwnProperty ('firstName'));
// console.log(sivi.hasOwnProperty ('species'));

// console.log(shivi._proto_);
// //Object.prototype (top of prototype chain)
// console.log(shivi._proto_._proto_);
// console.log(shivi._proto_._proto_._proto_);

// console.dir(personalbar.prototype.constructor);

// const arr = (3, 6, 4, 5, 6, 9, 3); // new Array === []
// console.log(arr._proto_);
// console.log(arr._proto_=== Array.prototype);

// console.log(arr._proto_._proto);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);


// Coding Challenge

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
 
// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log('${this.make} is going at ${this.speed}km/h');
// }

// Car.prototype.accelerate = function(){
//     this.speed -= 5;
//     console.log('${this.make} is going at ${this.speed}km/h');
// }
// const bmw = new Car ('BMW', 120);
// const mercedes = new Car ('Mercedes', 95);


// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

