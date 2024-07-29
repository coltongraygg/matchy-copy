/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */


//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cat';
animal['name'] = 'puppy';
animal.noises = [];



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
// add 'meow' to index 0 of noises
noises[0] = 'meow';
// add 'purr' to end of noises
noises.push('purr');
// add 'hiss' to beginning of array
noises.unshift('hiss');
// add 'meow meow' to end of noises using bracket syntax
noises[noises.length] = 'meow meow';
// log the length of noises
console.log(noises.length);
// log the last element in noises without hard coding the index
console.log(noises.length - 1);
// log the whole array
console.log(noises);





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// use bracket syntax to assign noises property to animal
animal['noises'] = noises;

// add another noise to the noises property on animal
animal['noises'].push('meow meow meow');

// console log animal
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

animal.name;
animal['name'];

noises[0];
noises[noises.length];


/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */



//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create animals array
var animals = [];
// push animal object to animals array
animals.push(animal);
// log
console.log(animals);
// create duck object
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
// push object to animals array
animals.push(duck);
// log
console.log(animals);
// create two more objects
var dog = {species: 'dog', name: 'Buddy', noises: ['bark', 'whine', 'growl', 'howl']};
var rabbit = {species: 'rabbit', name: 'Thumper', noises: ['thump', 'squeak', 'sniff', 'munch']};
// push new objects to array
animals.push(dog);
animals.push(rabbit);
// log
console.log(animals);
console.log(animals.length);




//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// use an array because this will be simple data, just a list of friends

var friends = [];

// create function designed to take an array
function getRandom(array) {
  // assign randomIndex to random index value in array
  let randomIndex = Math.floor(Math.random() * array.length);
  // return the randomindex of array
  return array[randomIndex];
}

// assign randomAnimal to random index in animals array
let randomAnimal = getRandom(animals);
// push random index's name to friends
friends.push(randomAnimal.name);
// log
console.log(friends);
// add friends array as a property to one of the animals
animals[0].friends = friends;
// log that animal 
console.log(animals[0]);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}