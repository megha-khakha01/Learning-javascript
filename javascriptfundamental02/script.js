//  Activating Strict mode


/*
let hasDriveringLicence = false;
 const passTest = true;

 if (passTest) hasDriveringLicence = true;
if (hasDriveringLicence) console.log('I can drive : D');

const interface = 'Audio';
const private = 534;
*/



// Functions


/*
function logger(){
console.log('My name is shivi');
 }
/*
//calling / running / invoking function
 /*logger();
 logger();
 logger();

function fruitProcessor(apples, oranges) {
   console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
 }

 const applejuice = fruitProcessor(5,0);
 console.log(applejuice);

 const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);*/




// function declarations vs expressions



//function declaration


/* function calcAge1(birthYear) {
 return 2037 - birthYear;
/ }
const Age1 = calcAge1(1991);*/


//Function expression
/*
 const calcAge2 = function (birthYear) {
 return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/


//ARROW FUNCTIONS



/*
const calcAge3 = birthYear => 2037 - birthYear;
const Age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037- birthYear;
    const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'shivi'));
console.log(yearsUntilRetirement(1980, 'megha'));
*/




// FUNCTIONS CALLING OTHER FUNCTIONS



/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applesPieces} piece of aaple and ${orangesPieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/



// REVIEWING FUNCTIONS



/*const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const YearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
yearsUntilRetirement(1991, 'Shivi');
yearsUntilRetirement(1950, 'Megha');
*/

// Coding challenge

/*const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));*/

// Test 1

/*let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(543, 111);*/


//Test 2
/*scoreDolphins = calcAverage(85 , 54, 41);
scoreKoalas = calcAverage(23 , 34 , 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/


      // Object Methods  //
      const shivi = {
        firstName: 'Shivi',
        lastName: 'Megha',
        birthYear: 1991,
        job: 'teacher',
        friends: ['Michael', 'Pete', 'Steven'],
        hasDriversLicense: true,

        calcAge: function(birthYear){
          return 2037 - birthYear;
        }
      };

