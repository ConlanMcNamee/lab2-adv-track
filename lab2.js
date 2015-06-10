'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob(name) {
  this.name = name;

}
var blob = new Blob('blob');

var timeToEat = function(townpop) {
  var eatRate = 1;
  var timeSpent = 0;
  while (townpop >= 0) {
    townpop -= eatRate;
    eatRate += 1;
    timeSpent += 1;
  }
  return timeSpent;
};

var hoursSpentInDowington = timeToEat(1000); // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var timeSpent = 0;
  this.population = population;
  this.peoplePerHour = peoplePerHour;
  if (this.population === 0) {
    return 0;
  }
  while (population >= 0) {
    population -= peoplePerHour;
    peoplePerHour += this.peoplePerHour;
    timeSpent += 1;
  }
  return timeSpent;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon:  'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  federationstandard: 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(homeplanet, tounge) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homeplanet = homeplanet;
  this.tounge = tounge;
}

function Klingon() {
  this.species = 'Klingon';
}
Klingon.prototype = new SentientBeing('Qo\'nos', 'klingon');
function Human() {}
Human.prototype = new SentientBeing('Earth', 'federation standard');
function Romulan() {}
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    if (sb.tounge === 'klingon') {
      return (hello.klingon);
    } else if (sb.tounge === 'romulan') {
      return (hello.romulan);
    } else {
      return (hello.federationstandard);
    }
    if (this.tounge === 'klingon') {
      console.log(hello.klingon);
    } else if (this.tounge === 'romulan') {
      console.log(hello.romulan);
    } else {
      console.log(hello.federationstandard);
    }
    //TODO: put this on the SentientBeing prototype
  }

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
;

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
'the romulans houdl hear Jolan\'tru');
assert((new Romulan()).sayHello(new Human()) === 'hello',
'the romulans houdl hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
'the romulans houdl hear Jolan\'tru');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
'the romulans houdl hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello',
'the romulans houdl hear Jolan\'tru');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

var animals = ['bear', 'cat', 'dog', 'bee'];
var foods = ['beets', 'soda', 'hotdog'];
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
      return 1;
    }
    if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
      return -1;
    }
    return 0;
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  }
  stringArray.sort(byLastLetter);
}
lastLetterSort(animals);
lastLetterSort(foods);

assert(animals[0] === 'bee' && animals[1] === 'dog' && animals[2] === 'bear', 'That is not correct');
assert(foods[0] === 'soda' && foods[1] === 'hotdog' && foods[2] === 'beets', 'that is not correct');

var numArray = [3, 42, 1, 87, 9];
var numArray2 = [4, 17, 85, 16];

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(num) {
    sum += num;
  });
  return sum;
}

assert((sumArray(numArray)) === 142, 'That is not the correct sum');
assert((sumArray(numArray2)) === 122, 'That is not the correct sum');

var arrayArrays = [];
var multipleArrays = function(array1, array2) {
  arrayArrays.push(array1);
  arrayArrays.push(array2);
};
multipleArrays(numArray, numArray2);

function sumSort(arrayOfArrays) {
  function byNumber(a, b) {
    if (sumArray(a) > sumArray(b)) {
      return 1;
    }
    if (sumArray(a) < sumArray(b)) {
      return -1;
    }
    return 0;
  }
  arrayOfArrays.sort(byNumber);
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
}
sumSort(arrayArrays);
assert(sumArray(arrayArrays[0]) === 122, 'Somethign is not correct');
assert(sumArray(arrayArrays[1]) === 142, 'Somethign is not correct');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
