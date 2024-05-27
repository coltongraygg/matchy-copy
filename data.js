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

// create a variable named animals and assign it to an empty object

var animal = {};

// Give `animal` a **property** named `species` with a value of any animal species (dot notation)

animal.species = 'Goblin Shark';

// give `animal` a **property** called `name` with a value of your animal`s name (bracket notation)
animal['name'] = 'Garry';

// give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];

// Print your `animal` Object to the console by adding, `console.log(animal);`,
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a variable named `noises` and assign it to an empty array.
var noises = [];

// give 'noises' its first element. a string representing a soound the animal might make (bracket notation)
noises[0] = 'Chomp Chomp Chomp';

// Using an array function add another noise to the end of `noises`.
noises.push('Fish are friends!');

// add another noise to the beginning of the noises array
noises.unshift('Just keep swimming');


// use length.array to add another string to the end of the noises array (bracket notation)
noises[noises.length] = 'Grrr';

// console.log the length of noises array
console.log(noises.length);

// console.log the last element in noises array using noises.length
console.log(noises[noises.length -1]);

// console.log the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign the noises property on animal to our new noises array
animal['noises'] = noises;

// add another noise to the noises property on animal
animal.noises.push('Another Ferocious Chomp');

 // console.log animal
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

// create an empty array named animals
 var animals = [];

 // push our animal that we created to animals array. 
 animals.push(animal);

 // console.log animals to see if the first animal appears on index.html
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// push duck to animals
animals.push(duck);

// console.log animals to see if both animals appear in console
console.log(animals);

// create another animal with species, name, and noises
var cow = { species: 'cow', name: 'Cow Jr.', noises: ['moo', 'mooooo', 'mooooooooo'] };

// push cow to animals
animals.push(cow);

// create another animal with species, name, and noises
var chicken = { species: 'chicken', name: 'Charlie The Chicken', noises: ['Chicken Noise1', 'Chicken Noise2', 'Chicken Noise3'] };

// push chicken to animals
animals.push(chicken);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


 // Create an empty storage array for our animals friends
 var friends = []

 /* I decided to use an array for our list of friends because we 
    are just listing strings and not any key value pairs. 
    Our list does not need to be ordered, so an array will work well.
 */

    // write a function getRandom that takes our animals array and returns a random index using Math.random
    function getRandom(animals) {
      // generate a random number between 0 and the length of our animals array
      return Math.floor(Math.random() * animals.length); 
    }

    // create a variable randomIndex and assign it to the function getRandom(animals)
    var randomIndex = getRandom(animals);

    // push that index name to the animals array
    friends.push(animals[randomIndex].name);

    // add friends array as property to first object in the animals array
    animals[0].friends = friends;

    // console log friends
    console.log(friends);




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