'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = '${firstName}. you are ${age},
        born in ${birthYear}' ;
        console.log(output);
        
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenlial = true ;
            // creating new variable with same name as outer scope's variables
            ConstFirstname = 'Shivi'
            // REASSIGNING OUTER SCOPE'S VARIABLE
            output ='NEW OUTPUT!';
            const str = 'Oh, and you're a millenial, $ 
            {firstName}';
            console.log(str);
            function add(a , b){
                return a + b;
            }
        }
        //console.log(str);
        console.log(millenlial);
    // console.log(add(2 , 3));
    console.log(output);
    }
    printAAge();

    return age;
}

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Shivi';
// let job = 'teacher';
// const year = 1991;

// // Functions 
// console.log(addDecl(2,3));
// //console.log(addExpr(2.3));
// console.log(addArrow);
// //console.log(addArrow(2,3));

// function addDec(a,b) {
//     return a + b;
// }
//  var addExpr = function (a,b) {
//     return a+b;
//  };

//  var addArrow = (a,b) => a + b;



//  //Example 
//  console.log(undefined);
//     if (!numProducts)  delectShoppingCart();
//         var numProuducts = 10;

//     function deleteShoppingCart() {
//         console.log('All products deleted!');
//     }

//  var x = 1;
//  let y = 2;
//  const z = 3;

//  console.log(x === window.x);
//  console.log(y === window.y);
//  console.log(z === window.z);




//  console.log(this);
//  constcalcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
//  };
//  calcAge(1991);

//  const calcAgeArrow = function( birthYear) =>{
//     console.log(2037 - birthYear);
//     console.log(this);
//  };
 
//  calcAgeArrow(1980);

//  const Shivi = {
//     year : 1991;
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year ;)
//     },
//  };
//  Shivi.calacAge();
 

//  const megha = {
//     year : 2017,
//  };

//  megha.calcAge = shivi.calcAge;
//  megha.calacAge();

//  const f = shivi.calacAge;
//  f();

// const jonas = {
//    firstName: 'Shivi',
//    year: 1991,
//    calcAge: function(){
//       //console.log(this);
//       console.log(2037 -this.year);

//       // Solution 1
//       // const self = this; // self or that

//       // const isMillenial = function () {
//       //    console.log(self);
//       //    console.log(self.year >= 1981 && self.year <= 1996);
//       //    //console.log(this.year >= 1981 && this.year <= 1996);
//       };

//  //solution 2

//  const isMillenial = () => {
//     console.log(this);
//     console.log(this.year >= 1981 && this.year <= 1996);
//  };
//  isMillenial();

//  greet: () => {
//     console.log(this);
//     console.log('Hey ${this.firstName}');
//  },

//  jonas.greeet();
//  jonas.calcAge();


//  //arguments keyword
//  const addExpr = function (a,b) {
//     console.log(arguments);
//     return a + b;
//  };
//  addExpr(2,5);
//  addExpr(2, 5, 8, 12);

//  var addArrow = (a,b) => {
//     console.log(arguments);
//     return a + b;
//  };
//  addArrow(2,5,8);






//  let lastName = 'shivi';
//  let oldLastName = lastName;
//  lastName = 'megha' ;
//  console.log(lastName , oldLastName);

//  const shivi = {
//     firstName: 'Jessica',
//     lastName: 'shivi',
//    //  age: 27,
//  };

//  const marriedjessica= jessica;
//  marriedjessica.lastName ='megha';
//  console.log(;Before marriage:',jessica');
//  console.log('After marriage:', marriedjessica);



//  //copying objects 
//  const jessica2 = {
//     firstName: 'jessica',
//     lastName: 'shivi',
//     age: 27,
//  };

//  const jessicaCopy = Object.assign({}, jessica2);
//  jessicaCopy.lastName = 'davis';

//  meghaCopy.family.push('Mary');
//  meghaCopy.family.push('John');

//  console.log('Before marriage:', jessica2);
//  console.log('After marriage:',jessicaCopy);
