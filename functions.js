/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////\

/**
 * I: FUNCTION RECEIVES AN ARRAY OF ANIMALS AND AN ANIMAL'S NAME 
 * O: FUNCTION OUTPUTS THE OBJECT ANIMAL'S OBJECT IN ANIMALS ARRAY
 * C: FUNCTION WILL RETURN NULL UNLESS THE ANIMALNAME PARRAM IS FOUND IN AN OBJECT IN ANIMALS ARRAY
 * E: N/A
 */

// create a search function that takes in animals array and animal name as params
function search(animalsArr, animalName) {
    // loop through the array, starting at 0 and stopping at the end of the animals array
    for (var i = 0; i < animalsArr.length; i++) {
        if (animalsArr[i].name === animalName) { // if the name at index === animalName param 
            return animalsArr[i]; // return animal object at index of array
        } 
    } return null; // otherwise return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES AN ARRAY OF ANIMALS, A NAME STRING REPRESENTING THE NAME OF AN ANIMAL IN THE ARRAY, AND A REPLACEMENT OBJECT
 * O: FUNCTION OUTPUTS THE REPLACEMENT ANIMAL OBJECT & REPLACES IT WITH THE OBJECT THAT WAS FOUND FROM THE NAME PARAM
 * C: NAME PARAM MUST MATCH A NAME FOUND IN THE ANIMALS ARRAY
 * E: N/A
 */

 // create function that receives animals, name, and replacement params // animals is an array of animals // name is a string relating to name of animal // replacement is an object that represents the replacement animal
 function replace(animals, name, replacement) {
  // loop through the animals array 
  for (var i = 0; i < animals.length; i++) {
    // check if the name at index matches the name param
    if (animals[i].name === name) {
      // if so, replace the animals object at index with the replacement object
      animals[i] = replacement;
      return replacement; // return replacement
    }
  } return; // return nothing otherwise
 }


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION INPUTS AN ANIMALS ARRAY PARAM AND A NAME STRING PARAM
 * O: FUNCTION OUTPUTS THE REMOVAL OF THE OBJECT IN ANIMALS ARRAY DETERMINED BY NAME PARAM
 * C: FUNCTION ONLY REMOVES THE OBJECT IF THE OBJECT HAS A MATCHING NAME VALUE AS THE NAME PARAM
 * E: N/A
 */

// create function remove with params animals and name // animals is array // name is string
function remove(animals, name) {
  // loop through animals array and search for an animal with a name matching the name param
  for (var i = 0; i < animals.length; i++) {
    if (animals[i].name === name) { // if the animals name === name string do this...
      animals.splice(i, 1); // remove the animals object 
      return; // end 
    }
  } 
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION INPUTS AN ARRAY OF ANIMALS AND AN OBJECT ANIMAL
 * O: FUNCTION ADDS THE ANIMAL OBJECT TO ANIMALS ARRAY
 * C: FUNCTION ONLY ADDS THE ANIMAL OBJECT TO ANIMALS ARRAY IF THE ANIMAL OBJECT HAS A VALUE FOR THE NAME AND SPECIES PROPERTIES AND IF IT'S NAME PROPERTY IS UNIQUE
 * E: N/A
 */

// create a function add that takes in animals array and an object representing a new animal to be added
function add(animals, animal) {
  // if the animal's name && species property has a length greater than 0
  if (animal.name.length > 0 && animal.species.length > 0) {
    // loop through animals array
    for (i = 0; i < animals.length; i++) {
      // if animal object has a unique name...
      if (animal.name === animals[i].name) {
        return; // return the function
      }
    }
    // otherwise, add the new animal to the array
    animals.push(animal);
  }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}