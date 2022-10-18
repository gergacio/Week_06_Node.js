//1
//define obj
//annonymous function return string (reference first property by . notation)
//func is first class object so invoke and store in a variable..
//We will see Miss Scarlet when print it
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);



//2
//can't assign new value because murder been declare with const keyword

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);



//3
//first verdict is mrs Peacock - line 45 - declare with let (ref in a  block scope) and returned from a func
//invoke declareMurder() and store in a variable(because funk is a first class obj so we can do all that) than print it

//second verdict is professor Plum - secondVerdict been assign with a string (get murder by interpolation) and print it

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//4
//function return all three (get by interpolation) 
//store function in variable suspects and print it...easy reference suspectThree (define variable by let - block scope)
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//5
//changeWeapon get change scenario property murder with given from outside
//store declareWeapon in verdict and print it
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//6
//murderer define with let so can change it in this block..we do that few times
//changeMurderer change murder once with mr.green than again with nested anonymous function(stored in plotTwist, than invoke it)
//another anonymous function (get murder value by interpolation) is stored in declareMurderer
//invoke changeMurderer(so murder been change to mrs.White)..than invoke declareMurderer and store it in verdict..log verdict and see mrs.White
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//7
//murder is mr Green ...because plotTwist define another murder with let keyword (can see this murder in plotTwist scope only)
//so when changeMurderer been invoked we change murder value from 'Professor Plum' to mr.Green..and nested function plotTwist don't affect murder (line 124)
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//8
//store anonymous func in changeScenario
//change object scenario properties by .notation and using function plotTwist
//because we change room value (line 162) ,line 178 will do the job because passed from ouside 'Dining Room' will match condition (line 165)
//plotTwist do job as well (line 166 match condition and change murder value) 
//in nested level unexpectedOutcome do the job because we much the murder(Colonel Mustard)
// unexpectedOutcome change the weapon to 'Candle Stick' - final answer
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

//9
//line 196 is True but line 197 define another murder (another scope - inside if statement)
//line 202 by interpolation get value of murder in line 195 (scope from 195 to 206 lines :) )
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);