'use strict';

//const { useCallback } = require("react");

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function(movements){
//   containerMOvements.innerHTML = '';
//   //.textContent = 0
//   movements.forEach(function (mov , i) {
//     const type = mov > 0 ? 'deposite' : 'withdraw'
//   });
//   };
//   displayMovements(account1.movements);{
//     const html ='
//      <div class="movements__row">
//           <div class="movements__type movements__type--${type}">$
//           i + 1
//           } ${type} </div>
//           <div class="movements__value">${mov}</div>
//         </div>
//     ';

//       containerMovements .insertAdjacentHTML('afterbegin');



//   });
// };
//     cdisplayMovements(account1.movement);

// const calcDisplayBalance = function (movements){ const balance = movents.reduce((acc , mov) => acc + mov, 0);
// labelBalance.textContent = '${balance} EUR'};
// calcDisplayBalance(account1.movements);
// calcDisplaySummary = function(movements) {
//   const incomes = movements 
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = '${incomes}';

//   const out = movements
//     .filter(mov => mov < 0)
//   .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut .textContent = '${Math.abs(out)}';

//   const interest = movements
//   .filter(mov => mov > 0)  
//   .map(deposits => deposits * 1.2/100)
//   .filter((int , i , arr) =>  {
//     console.log(arr);
//     return int >= 1 ;
//   })
//   .reduce((acc , int) => acc + int, 0);
//   labelSumInterest.textContent = '${interst}';
// };
// calcDisplaySummary(account1.movements);
// const createUsernames = function (accs) {
//   accs.forEach(function(acc) {
//     acc.username = acc.owner
//     .tolowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   });
// };
// createUsernames(accounts);


// Event handler
// let currentAccount;

// btnLogin.addEventListener('click', function (e) {
//   //Prevent form from submitting
//   e.preventDefault();

// currentAccount = accounts.find(acc => acc.username === inputLogUsername.value);
// console.log(currentAccount);

// if (currentAccount?.pin === Number (inputLoginPin.value)){
//   //Display UI and message
//   labelWelcome.textContent = 'Welcome back , ${ currentAccount.owner.split('')[0]
// }';
// containerApp.style.opacity = 100;

// //clear input fields

// inputLoginUsername.value = inputLoginPin.value = '';
// inputLoginPin.blur();
// //display movements
// displayMovements(currentAccount.movements);
// //display balance
// calcDisplayBalance(currentAccount.movements);
// //displace summary
// calcDisplaySummary(currentAccount.movements);

// });

// btnTransfer.addEventListener('click', function (e){
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
// inputTransferAmount.value = inputTransferTo = '';
//   if(amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?. username != currentAccount.username
//   ){
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnLoan.addEvenListner('click', function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);
// const receiverAcc = accounts.find (
//   acc => acc.username === inputTransferTo.value
// );
// inputTransferAmount.value = InputTransferTo.value = '';

// if (
//   amount > 0 &&
//   receiver &&
//   currentAccount.balance >= amount &&
//   receiverAcc?.username != currentAccount.username
// ){
//   // Doing the transfer
//   currentAccount.movements.push(-amount);
//   receiverAcc.movements.push(amount);

//   //Update UI
//   updateUI(currentAccount);
// }

//   }
// });

// // btnClose.addEventListner('click , function (e) {
// //   e.preventDefault();

//   if(
//     inputCloserUsername.value === currentAccount.username && 
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf (23)

//     //Delete account
//     accounts.splice(index, 1);
    
//     //Hide UI
//     containerApp.style.opacity = 100;

//   }

//   inputCloseUsername.value = inputClosePin.value = '';
// });
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = [ 'a' , 'b' , 'c' , 'd' , 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log(arr.slice[...arr]);


// //SPLICE
// //console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1 ,2);
// console.log(arr);

// //REVERSE
// arr = ['a' , 'b' , 'c' , 'd' , 'e'];
// const arr2 = ['j','i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join( ' - ' ));


// const arr = [23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0));


// //getting last array element

// comsole.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('shivi' .at(0));
// console.log('shivi' .at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //for (const movement of movements) {
// for (const [i, movement] of movements.entries()){
//   if (movement > 0) {
//     console.log ('Movement ${i + 1}:You deposited ${movement}');
//   }else {
//     console.log('Movement ${i + 1}: You withdrew ${Math.abs(movment)}');
//   }
// }

// movements.forEach('---FOREACH---');
// movements.forEach(function(mov, i, arr){
//  if (mov > 0) {
//     console.log ('Movement ${i + 1}:You deposited ${mov}');
//   }else {
//     console.log('Movement ${i + 1}: You withdrew ${Math.abs(mov)}');
//   }
// });

// //0; function(200)
// //0; function(450)
// //0; function(400)
// //...


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(''${key}: ${value}');
// });

// //Set
// const currenciesUnique = new Set([ 'USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, map){
//   console.log('{$key}: ${value}');
// });



// CODING CHALLENGE //

// const checkDogs = function (dogsJulia , dogsKate){
//   const dogsJuliaCorrected = dogsJulia.slice(;
//     dogsJuliaCorrected.splice(0, 1);
//     dogsJuliaCorrected.splice(-2);

//     dogsJulia.forEach(function(dog, i){
//       if (dog>=3){
//         console.log('Dog number ${i + 1} is an adult, and is ${dog}years old');
//       }else {
//         console.log ('Dog number ${i+1} is still a puppy');
//       }
//     })
//   );
// };
// //checkDogs([3, 5, 2 , 12, 7] , [4 , 1, 15 ,8 ,3]);
// checkDogs ([9,16,6,8,3], [10,5,6,1,4]);


// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurTOUsd);
// console.log (movementsUSDfor);

//  const movementsDescriptions = movements.map(mov , i, arr) => {
//   'Movement ${i + 1}: You ${mov > 0? 'deposited':'withdrew'} ${Math.abs(
//   mov
// )}';
     
//  };
// console.log(movementsDescriptions);

// const deposits = movements.filters(function (mov){
// return mov > 0;
// } ) ;
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push (mov);
// console.log (depositsFor);

// const withdraw = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc , cur , i , arr){
// console.log ('Iteration ${i} : ${acc}');
// return acc + cur ;
// }, 0);
// const balance = movements.reduce((acc , cur ) => acc + cur , 0);
// console.log (balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov ;
// console.log(balance2);

//Maximum value 
// const max = movements.reduce((acc , mov) => {
//     if(acc > mov) return acc;
//     else return mov;
// }, movements[0]);
// console.log(max);


//Coding Challenge

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // const average = adults.reduce(
  //   (acc, age, i, arr) => acc + age / arr.length,
  //   0
  // );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);


// const eurToUsd = 1.1;
// console.log(movements);

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// Coding Challenge

// const calcAverageHumanAge2 = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   return average;
// };


// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// // adults.length

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);



// const firstWithdrawl = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawl);

// console.log(accounts);

// const  account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// console.log(movements);


// //EQUALITY
// console.log(movements.includes(-130));

// // SOME: CONDITION
// console.log(movements.some(mov => mov === -130));

// const anyDeposists = movements.some(mov => mov > 0);
// console.log(anyDeposists);

// // EVERY
// console.log(movements.every(mov => mov >0));
// console.log(account4.movements.every(mov => > 0));

// // Seperate callBack
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));


// const arr = [[ 1, 2 , 3], [4, 5 , 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3] [4,  [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // flat
// const overalBalance = accounts
// .map(acc => acc.movements)
// .flat()
// .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flatMap
// const overalBalance2 = accounts
// .flatMap (acc => acc.movements)
// .reduce(acc, mov)=> acc + mov, 0);
// console.log(overalBalance2);

// Strings
// const owner = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owner.sort());
// console.log(owners);

// //Numbers
// console.log(movements);


// // return < 0, A, B(keep order)
// // return > 0, B, A(switch order)

// //Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a,b) => a-b);
// console.log(movements);

// //Descending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// //Emprty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));
// x.fill(1,3,5);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 4, 6);
// console.log(arr);

// //Array.from
// const y = Array.from({length: 7}, () => 1);
// console.log(y);

// const z = Array.from({ length: 7},() => 1 );
// console.log(z);

// lookBalance.addEventListner('click', function (){
//   const movementsUI =Array.from(
//     document.querySelectorAll('.movements_value'),
//     el => Number(el.textContent.replace('',''))
//   );

//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements_value')];
// });


// Array Methods Practice


// 1.
// const bankDepositSum = accounts
//  .flatMap(acc => acc. movements)
//  .filter(mov => mov > 0)
//  .reduce((sum, curr) => sum + curr, 0);

//  console.log(bankDepositSum);


//  // 2.
//  // const numDeposits1000 = accounts
//  // .flatMap(acc => acc.movements)
//  // .filter(mov => mov >= 1000).length;

//  const numDeposits1000 = accounts.flatMap(acc => acc.movements)
//  // .reduce((count, curl) => ( cur >= 1000 ? count + 1
//  //: count). 0);
//  .reduce((count, cur) => (cur >= 1000 ? count++ :
//   count), 0);
 

//   console.log(numDeposits1000);



//   // prefixed ++ operator
//   let a = 10;
//   console.log(++a);
//   console.log(a);


//   // 3.
//   //const sums = accounts
//   //.flatMap(acc => acc.movements). reduce(())
// const {deposits, withdrawals } = accounts 
// .flatMap(acc => acc.movements)
// .reduce (
// (sums, cur) => 
//   // curl > 0 ? (sums.deposits += curl) : (sums.
//   withdrawals +=cur);
//   sum[cur >0 ? 'deposits' : 'withdrawals'] +=
//   cur;
//   return sums;
// },
// {deposits: 0, withdrawals: 0}
// );

// console.log(deposits, withdrawals);



// // 4.
// // this is a nice title --> This Is a Nice Title
// const convertTitleCase = function(title) {
//   const capitalize = str => str [0].toUpperCase() +
//   str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 
//     'or', 'on', 'in','with'];

//     const titleCase = title 
//     .toLowerCase()
//     .split('')
//     .map(word => (expections.include(word) ? word : 
//   capitzalize(word)))
//   .join('');
//   return titleCase;
// };

// console.log(convertTitleCase ('this is a nice titke'));
// console.log(convertTitleCase ('this ia a Long title but not too long'));
// console.log(convertTitleCase ('and here is another title with an EXAMPLE'));



// Coding Challenge

//  1.

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.
//   weight ** 0.75 * 28 )));



//   // 2.
//  const dogSarah = dogs.find(dog => dog.owners.includes
//  ('Sarah'));
//  console.log(dogSarah);
//  console.log(
//   `Sarah dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' :
//     'little'
//   }`
//  );


//  //  3.

//  const ownersEatTooMuch = dogs
//  .filter(dog => dog.curFood > dog.recFood)
//  .flatMap(dog => dog.owners);
//  // flat();
//   console.log(ownersEatTooMuch);

//   const ownwersEatTooLittle = dogs 
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.ownrs);
//   console.log(ownwersEatTooLittle);


//   // 4.
// // "Matilda and Alice and bob's dogs eat too much!"
// //"Sarah and John and Michael's dogs eat too little!"

//   console.log(`${ownersEatTooMuch.join(' and ')}'s dogs
//   eat too much!`);
//   console.log(`${ownwersEatTooLittle.join(' and ')}'s
//   dogs eat too litle!`);


//   // 5.

//   console.log(dogs.some(dog => dog.curFood === dog.
//     recFood));


//     // 6.
//     // current > (recommended * 0.90)  && current <
//     //(recommended * 1.10)
//     const checkEatOkay = dog =>
//       dog.curFood > dog.recFood * 0.9 && dog.curFood <
//     dog.recFood * 1.1;

//     console.log(dogs.some(checkEatOkay));

 

//     // 7.
//     console.log(dogs.filter(checkEatingOkay));

//     // 8.
//      // sort it by recommended food portion in an ascening order
//      //[1, 2, 3]

//     const dogsSorted = dogs.slice().sort((a,b) => a.
//   recFood - b.recFood);
//   console.log(dogsSorted);



// console.log(Math.sqrt(25));
// console.log(25 ** (1/2));
// console.log(8 ** (1/3));

// console.log(Math.max(5, 18, 10, 25, 56));
// console.log(Math.max(5, 18, 10, 25, '56'));
// console.log(Math.max(5, 18, 10, 25, '56px'));

// console.log(Math.min(29, 88, 100, 25, 56));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.floor(Math.random () * (max - min) + 1) + min;
// // 0...1 -> 0...(max - min) -> min...max

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// // Rounding integers


// console.log(Math.round(23.3));  //23
// console.log(Math.round(23.9));  //24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.9)); // 24

// console.log(Math.floor(23.3));  //23
// console.log(Math.floor('23.9'));  //23

// console.log(Math.trunc(23.3));  //23

// console.log(Math.trunc(-23.3));   //23
// console.log(Math.floor(-23.3));   //24

// // Rounding decimals

// console.log((2.7).toFixed(0));  //0
// console.log((2.7).toFixed(3));  //2.700
// console.log((2.345).toFixed(2));  //2.35
// console.log(+(2.345).toFixed(2));  //2.35


   // The reminder operator
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     // 0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     // 0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

// Numeric separators
// 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.1415;
// console.log(PI);

// console.log(Number('230_000'));
// console.log(parseInt('230_000'));

// Working with BigInt

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(4838430248342043823408394839483204n);
// console.log(BigInt(48384302));

// // Operations
// console.log(10000n + 10000n);
// console.log(36286372637263726376237263726372632n * 10000000n);
// // console.log(Math.sqrt(16n));

// const huge = 20289830237283728378237n;
// const num = 23;
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n> 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');

// console.log(huge + ' is REALLY big!!!');

// // Divisions
// console.log(11n / 3n);
// console.log(10 / 3);

// Creating Dates

// Create a date
/*
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142256980000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);


// Operations With Date
// const f = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);



// Internationalizing Dates


// const number = 3884764.23;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
//   // useGrouping: false,
// };

// console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );





