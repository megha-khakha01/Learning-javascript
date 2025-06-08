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


// ES6 Classes

// class expression
// const PersonCl = class {}

//class declaration
// class PersonCl {
//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// // Methods will be added to .prototype property
//     calcAge(){
//         console.log(2037 - this.birthYear);
//     }
// }
// greet(){
//     console.log('Hey ${this.firstName}');
// }
 
// get age () {
//     return 2037 - this.birthYear;
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();
//console.log(jessica._proto_=== PersonCl.prototype);
// console.log(jessica._proto_=== PersonCl.prototype);

// //PersonCl.prototype.greet = function () {
//   //  console.log('Hey ${this.firstName}');
// }
// jessica.greet();

// // 1. Classses are NOT hoisted
// // 2. Classes are first - class citizes
// 3. Classes are executed in strict mode

// Setters and Getters

// const account = {
//     owner: 'Shivi',
//     movements: [200, 530, 120, 300],

//     get latest(){
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov){
//         this.movements.push(mov);
//     },
// },

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);


// Object.create

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName.birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven._proto_ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();


// Coding Challenge

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10 ;
//         console.log('{this.make} is going out ${this.speed} km/h');
//     }

//     brake(){
//         this.speed -= 5;
//         console.log('{this.make} is going at ${this.speed} km/h');
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// const ford = new CartCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// Coding Challenge

// const Car = function (make , speed){
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log('${this.make} is going at ${this.speed} km/h');
// };

// Car.prototype.accelerate = function(){
//     this.speed -=5 ;
//     console.log('${this.make} is going at ${this.speed} km/h');
// };
// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed)
//     this.speed = charge;
// }

// // Link the prototypes
// EV.prototype =  Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
// };

// EV.prototype.accelerate = function() {
//     this.speed +=20;
//     this.charge--;
//     console.log('${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}');
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();


// Static method
// static hey(){
//     console.log(' Hey there');
// }
// }
// class StudentCl extends PersonCl {
//     // constructor(fulName, birthYear, course) {
//     // Always needs to happens first!
//     // super(fulName, birthYear);
//     // this.course = course;
    
// }

// introduce(){
//     console.log('My name is ${this.firstName} and I study ${this.course}');
// }
// calcAge(){
//     console.log(
//         'I'm ${
//             2037 - this.birthYear
//         } years old, but as a student I feel more like $
//         {
//             2037 - this.birthYear + 10
//         }'
// };
//     }
// } 

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();
// Inheritance Between "Classes": Object.create

// const PersonProto ={
//     calcAge() {
//         console.log (2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };

// StudentProto.introdeuce = function (){
//     console.log('My name is ${this.fulName} and I study ${this.course}');
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introdeuce();
// jay.calcAge();

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements =[];
        this.locale = navigator.language;

        console.log('Thanks for opening an account, ${owner}');
    }
// Public interface
    deposit(val){
        this.movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val);
    }
approveLoan(val){
    return true;
}
requestLoan(val){
    if(this.approveLoan(val)){
        this.deposit(val);
        console.log('Loan approved');
    }
}
    }


const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);


console.log(acc1);
console.log(acc1.pin);