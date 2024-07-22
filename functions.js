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




 /**
  * I: FUNCTION RECEIVES AN ARRAY AND A STRING
  * O: IF STRING IS FOUND IN ARRAY[I]'S NAME PROPERTY, RETURN ARRAY[I]'S OBJECT, OTHERWISE RETURN NULL
  * C: N/A
  * E: N/A
  */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string) {
    // use found variable to return result
    let found = null;
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // search for a match
        if (array[i].name === string) {
            // if match is found, assign found to the match array[i]
            found = array[i];
        }
    }
    // after loop is finished return found value 
    return found;
    
}



/**
 * I: FUNCTION RECEIVES AN ARRAY OF ANIMALS, A STRING NAME, AND A REPLACEMENT OBJECT
 * O: IF STRING NAME IS FOUND IN ANIMAL'S NAME PROPERTY, FUNCTION REPLACES THE OBJECT WITH REPLACEMENT
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    // iterate through array
    for (let i = 0; i < animals.length; i++) {
        // search for a match
        if (animals[i].name === name) {
            // if match is found replace 
            animals[i] = replacement;
        }
    }
}




/**
 * I: FUNCTION RECEIVES AN ARRAY OF ANIMALS AND A STRING NAME REPRESENTING AN ANIMALS NAME PROPERTY
 * O: IF NAME STRING MATCHES A NAME PROPERTY IN ARRAY, FUNCTION REMOVES VALUE 
 * C: N/A
 * E: N/A
 */


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    // iterate through array
    for (let i = 0; i < animals.length; i++) {
        // search for a match
        if (animals[i].name === name) {
            // if match is found, remove current value
            animals.splice(i, 1);
        }
    }
}




/**
 * I: FUNCTION RECEIVES AN ARRAY OF ANIMALS AND ANIMAL REPRESENTING AN OBJECT
 * O: FUNCTION ADDS ANIMAL OBJECT TO ANIMALS ARRAY
 * C: ANIMAL OBJECT MUST HAVE A NAME AND SPECIES PROPERTY WITH A LENGTH > 0 AND MUST BE UNIQUE
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add (animals, animal) {
    // create variable to check if animal exists in array
    let exists = false;
    // check if animal name and species property have a length > 0
    if (animal['name'].length > 0 && animal['species'].length > 0) {
        // iterate through array
        for (let i = 0; i < animals.length; i++) {
            // see if animal is already in array
            if (animals[i].name === animal.name) {
                exists = true;
            }
        }
    }
    if (exists === false) {
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