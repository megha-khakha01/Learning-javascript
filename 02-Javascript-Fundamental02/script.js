//  Activating Strict mode



let hasDriveringLicence = false;
 const passTest = true;

 if (passTest) hasDriveringLicence = true;
if (hasDriveringLicence) console.log('I can drive : D');

const interface = 'Audio';
const private = 534;




// Functions



function logger(){
console.log('My name is shivi');
 }

//calling / running / invoking function
 logger();
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
      // const shivi = {
      //   firstName: 'Shivi',
      //   lastName: 'Megha',
      //   birthYear: 1991,
      //   job: 'teacher',
      //   friends: ['Michael', 'Pete', 'Steven'],
      //   hasDriversLicense: true,

      //   //calcAge: function(birthYear){
      //   //  return 2037 - birthYear;
      //   //}
      //   // calcAge: functions () {
      //   //   //console.log(this);
      //   //   return 2037 - this.birthYear;
      //   // }

      //   CALCaGE: FUNCTIONS () {
      //     this.age = 2037 - this.birthYear;
      //     return this.age;
      //   },

      //   getSummary: function(){
      //     return'${this.firstName} is a ${this.calcAge{}} - year old ${jonas.job}, and he has ${this. hasDriversLicense ? 'a' : 'no' } driver's license.'
      //   }
      // };

      //  console.log(jonas.calcAge());
      //  console.log(jonas.age);
      //  console.log(jonas.age);
      //  console.log(jonas.age);


      // //console.log1(jonas['calcAge'](1991));


      //   Challenge  //
      // // "Jonas is a 46-year old teacher , and he has a driver's license"

      // console.log(jonas.getSummary());


      //  Coding Challenge  //
      
      // const mark = {
      //   fullName: 'Maek Miller',
      //   mass: 78,
      //   height: 1.69,
      //   calcBMI: function(){
      //     this.bmi = this.mass / this.height ** 2;
      //     return this.bmi;
      //   }
      // };


      // const john = {
      //   fullName: 'John Smith',
      //   mass: 92,
      //   height: 1.95
      //   calcBMI: function(){
      //     this.bmi = this.mass / this.height ** 2;
      //     return this.bmi;
      // };

      // mark.calcBMI();
      // john.calBMI();


      // console.log(mark.bmi, john.bmi);

      // // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

      // if(mark.bmi > john.bmi) {
      //   console.log ('$(mark.fulName}'s BMI (${mark.BMI}') is higher than ${john.fulName}'s BMI (${john.BMI})')
      // } else if (john.bmi > mark.bmi) {
      //   console.log ('${john.fulName}'s BMI (${john.BMI}) is higher than $(mark.fulName)'s BMI (${mark.BMI})')
      // }


      //  Iteration: The For Loop  //

      // console.log('Lifting weights repetition 1');
      // console.log('Lifting weights repetition 2');
      // console.log('Lifting weights repetition 3');
      // console.log('Lifting weights repetition 4');
      // console.log('Lifting weights repetition 5');
      // console.log('Lifting weights repetition 6');
      // console.log('Lifting weights repetition 7');
      // console.log('Lifting weights repetition 8');
      // console.log('Lifting weights repetition 9');
      // console.log('Lifting weights repetition 10');


      //for loop keeps running while condition is TRUE
      // for (let rep = 1; rep <= 30; rep++) {
      //    console.log('Lifting weights repetition ${rep}');
      // }


      //  Looping Arrays. Breaking And Continuing  //

      // const jonasArray = [
      //   'Jonas',
      //   'Schmedtman',
      //   2037 - 1991,
      //   'teacher',
      //   ['Michael', 'Peter', 'Steven']
      // ];

      // console.log(jonas[0])
      // console.log(jonas[1])
      // ***
      // console.log(jonas[4])
      // jonas[5] does NOT exist

      // for (let i = 0; i < jonasArray.length; i++) {
      //   // Reading from jonas array
      //   console.log(jonas[i], typeof jonas[i]);

      //   // Filling types aaray
      //   //types[i] = typeof jonas[i];

      //   types[i] = typeof jonas[i];
      // }

      // console.log(types);

      // const years = [1991, 2007, 1996, 2020];
      // const ages = [];

      // for ( let i = 0; i < years.length; i++) {
      //   ages.push(2037 - years[i]);
      // }
      // console.log(ages);

      // //continue and break
      // console.log('---ONLY STRING---')
      // for (let i = 0; i < jonas.length; i++) {
      //   if (typeof jonas [i] !== 'string') continue;

      //   console.log(jonas[i] , typeof jonas[i]);
      // }

      // Looping Backward And Loops In Loops  //

      // const jonas = [
      //   'Jonas'
      //   'Schmedtmann',
      //   2037 - 1991,
      //   'teacher'
      //   ['Michael', 'Peter', 'Steven']
      //   true
      // ];

      // // 0, 1, ..., 4
      // // 4, 3, ..., 0

      // for (let i = jonas.length - 1 ; i >= 0; i--){
      //   console.log(i, jonas[i]);
      // }

      // for (let exercise = 1; exercise < 4; exercise++){
      //   console.log(-------Starting exercise ${exercise}');

      //     for(let rep = 1 ; rep < 6; rep++){
      //       console.log('Lifting weight repetition ${rep}');
      //     }
      // }


      //  While Loop  //

      //for (let rep = 1; rep <= 10 ; rep ++){
        //console.log(Lifting weights repetition ${rep}');
      // }

      // let rep = 1;
      // while (rep <=10) {
      //  // console.log ('WHILE: lifting weights repetition'${rep}');
      //     rep++;
      // }

      // let dice = Maths.trunc(Math.random()*6 ) + 1;
      // console.log(dice);

      //   while(dice !== 6) {
      //     console.log('You rolled a ${dice}');
      //     dice = Math.trunc(Math.random() * 6) + 1;
      //     if (dice === 6) console.log ('Loop is about to end...');
      //   }


      //  Coding Challenge  //

      // const calcTip = function (bill) {
      //   return bill >= 50 && bill <=300 ? bill * 0.15 : bil * 0.2;
      // }

      // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52]
      // const tips = [];
      // const totals = [];

      // for (let i = 0; i < bills.length; i++) {
      //   const tip = calcTip(bills[i]);
      //   tips.push(tip);
      //   totals.push(tip+bills[i]);
      // }

      // console.log(bills , tips , totals);

      // const calcAverage = functions (arr) {
      //   let sum = 0
      //   for (let i = 0; i < arr.length; i++){
      //      // sum= summ + arr [i];
      //      sum += arr[i];
        
      //   }
      //   return sum / arr . length;
      // }

      // console.log(calcAverage[2 , 3 , 7]);
      // console.log(calcAverage(totals));
      // console.log(calcAverage(tips));
      



      








      





  



