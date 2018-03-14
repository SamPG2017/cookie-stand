"use strict";


// testing whether the html page sees this particular file
// alert ('hey, do you see this ?'); // test passed


// Create all object literals for five stores provided, using information provided along with names

// var of totalCookies should equal random number gen * avg cookies sales per cust per store

// var totalCookies = 

/*
var store = new Store();
  this.storeNumber = storeNumber;
  this.storeLocation = storeLoc;
  this.hoursWorked = 16;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;

  store.generateRandomSalesPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  }
}

var Pike = new Store('1', '1st and Pike', 23, 65, 6.3);

*/

// TESTING THIS LINE
console.log('TESTING THIS LINE AT 33');
var testList = document.createElement('ul');

// Figure out how to write this information to the // Create the first object
var storeDetails = {
  storeNumber: "1",
  storeLocation: '1st and Pike',
  hours: 16, 
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  
  
  // Generate and return a random number 
  // based on the min/max per store provided 
  getRandomIntInclusive: function () { 
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  }
};

// this is the end of the first object

// setting the variable of avgCookiePerCust outside 
// the object
var avgCookiePerCust = storeDetails.avgCookiePerCust; 
// console.log('avgCookiePerCust is: ', typeof avgCookiePerCust);
// console.log('  LINE 54 -- Store Details Pike: ', storeDetails);

console.log('LINE 56 -- Random Number for Pike (bt 22 & 65): ', typeof storeDetails.getRandomIntInclusive());

  // This function yields an array of how many
  // customers per hour randomized using the
  // numbers provided per store

  // Set up an array function to be filled below
  function custPerHourArray () {
    // Declare custPerHour as an empty array
    var custPerHour = [];  
    var numberOfHours = 15;   // number of hours stores are open

  for ( var i = 0; i < numberOfHours; i++) {
  // do this thing
  // Fills the empty array one element at a time to 
  // the length of the var numberOfHours

  // Declare randomPike = the method of getRandomIntInclusive up under Pike store
  // when I used this. in the object
    var randomPike = storeDetails.getRandomIntInclusive();
    
   // Add to custPerHour array above one number at a 
   // time based on the for loop run 15 times
    custPerHour.push(randomPike); 
    
    // end of the for loop
  }
  // This returns the filled array of number of random customers
  return custPerHour;
}
// ===================================
// This is another function that generates the sum of
// cookies per hour by using the custPerHourArray of
// of random numbers from earlier and multiplying each
// of those generated numbers by avgCookies to get
// an array of cookies sold per hour 

function sumCookies(custPerHourArray, avgCookies) {
  // set cookieArray = an empty array to be filled
  var cookieArray = [];
  // set cumuTotal = initial value of 0
  var cumuTotal = 0;
  
  // run this for loop inside the function to get
  // the number of cookies sold per hour
  for( var i = 0; i < custPerHourArray.length; i++) {
  
  // see if the iteration actually works each time
  //  console.log('Loop counter: ' + i);
  
  // set numCookies = array[element] * avgCookies
  // numCookies per iteration = random number * avgCookies
    var numOfCookies = custPerHourArray[i] * avgCookies;
    
  // make numOfCookies a whole number  
    numOfCookies = Math.round(numOfCookies);
  
  // Push each generated number into an array each
  // time the for loop runs
    cookieArray.push(numOfCookies);
    
  // Set a variable that started at 0 above, but
  // adds the new value for numOfCookies to 
  // cumuTotal every time the for loop runs
    cumuTotal = cumuTotal + numOfCookies;
    
  // see if the addition to cumuTotal works every time
  // and it works
    console.log('cumuTotal: ' + cumuTotal);
  }
  // Push one more element into cookieArray at the end
  // Push the value of cumuTotal onto the array
  cookieArray.push(cumuTotal);


////////////////////////////////////
// CREATING LOOP TO WRITE TO PAGE
// SCARED TO TEST, BUT I'M GONNA 
// IT WORKS - HALLELUJAH, BUT
// IT GIVES THE SAME NUMBER EACH TIME
// NEED TO CHASE DOWN WHY AND MAKE
// EACH LI A RANDOM VALUE TO MATCH
// THE COOKIE VALUES
////////////////////////////////////

  var writeToPage = function () {
    // this creates the list item to be filled on the HTML page
    var writeNumOfCookies = document.createElement('li');  // what is this information ?
    
    // Testing getting text on HTML
    writeNumOfCookies.textContent = (numOfCookies);       // what is this information ?
    // document.textContent('SEE THIS ?');       // what is this information ?
        
    var testPike = document.getElementById('pike');
    
    // document.appendChild();       // this appends the information to
                                     // whatever element comes before
    testPike.appendChild(writeNumOfCookies);
    }
    // SETTING FOR LOOP TO TEST ITERATION OF TEXT GENERATION
    for (var i = 0; i < custPerHourArray.length; i++) {
      writeToPage();
    }


// MAKE THE TABLE

// EVERYTHING WORKS TO THE END OF CURRENT CODE

  // get the array of numOfCookies and cumuTotal 
  // to come out
  return cookieArray;
}

  // // Everything is working to this point==================================================

// Working this out in Repl


   
var testCustArray = custPerHourArray();
// Set up a test with passed parameters to see if
// the function sumCookies works
// Passed in random numbers of cust/hour in array 
// and avgCookiePerCust for Pike to test
// and it works
var testCookieArray = sumCookies(custPerHourArray(),       storeDetails.avgCookiePerCust);

// Checking to see if everything works
// and it seems to
console.log('testCustArray' + testCustArray);
console.log('testCookieArray' + testCookieArray);

// Everything is working to this point===========================================

sumCookies

// =============================================

//console.log('Store Details SeaTac: ', storeDetailsSeaTac);
console.log('RandomSeaTac: ', storeDetailsSeaTac.getRandomIntInclusive());

// TESTING THIS LINE
console.log('TESTING THIS LINE AT 224');
var testList = document.createElement('ul');

// Figure out how to write this information to the // Create the first object
var storeDetailsSeaTac = {
  storeNumber: "2",
  storeLocation: 'SeaTac Airport',
  hours: 16;
  minCustPerHourSeaTac: 3,
  maxCustPerHourSeaTac: 24,
  avgCookiePerCustSeaTac: 1.2,
  
  
  // Generate and return a random number 
  // based on the min/max per store provided 
  getRandomIntInclusive: function () { 
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  }
};

// this is the end of the first object

// setting the variable of avgCookiePerCust outside 
// the object
var avgCookiePerCust = storeDetails.avgCookiePerCust; 
// console.log('avgCookiePerCust is: ', typeof avgCookiePerCust);
// console.log('  LINE 54 -- Store Details Pike: ', storeDetails);

console.log('LINE 56 -- Random Number for Pike (bt 22 & 65): ', typeof storeDetails.getRandomIntInclusive());

  // This function yields an array of how many
  // customers per hour randomized using the
  // numbers provided per store

  // Set up an array function to be filled below
  function custPerHourArray () {
    // Declare custPerHour as an empty array
    var custPerHour = [];  
    var numberOfHours = 15;   // number of hours stores are open

  for ( var i = 0; i < numberOfHours; i++) {
  // do this thing
  // Fills the empty array one element at a time to 
  // the length of the var numberOfHours

  // Declare randomPike = the method of getRandomIntInclusive up under Pike store
  // when I used this. in the object
    var randomPike = storeDetails.getRandomIntInclusive();
    
   // Add to custPerHour array above one number at a 
   // time based on the for loop run 15 times
    custPerHour.push(randomPike); 
    
    // end of the for loop
  }
  // This returns the filled array of number of random customers
  return custPerHour;
}
// ===================================
// This is another function that generates the sum of
// cookies per hour by using the custPerHourArray of
// of random numbers from earlier and multiplying each
// of those generated numbers by avgCookies to get
// an array of cookies sold per hour 

function sumCookies(custPerHourArray, avgCookies) {
  // set cookieArray = an empty array to be filled
  var cookieArray = [];
  // set cumuTotal = initial value of 0
  var cumuTotal = 0;
  
  // run this for loop inside the function to get
  // the number of cookies sold per hour
  for( var i = 0; i < custPerHourArray.length; i++) {
  
  // see if the iteration actually works each time
  //  console.log('Loop counter: ' + i);
  
  // set numCookies = array[element] * avgCookies
  // numCookies per iteration = random number * avgCookies
    var numOfCookies = custPerHourArray[i] * avgCookies;
    
  // make numOfCookies a whole number  
    numOfCookies = Math.round(numOfCookies);
  
  // Push each generated number into an array each
  // time the for loop runs
    cookieArray.push(numOfCookies);
    
  // Set a variable that started at 0 above, but
  // adds the new value for numOfCookies to 
  // cumuTotal every time the for loop runs
    cumuTotal = cumuTotal + numOfCookies;
    
  // see if the addition to cumuTotal works every time
  // and it works
    console.log('cumuTotal: ' + cumuTotal);
  }
  // Push one more element into cookieArray at the end
  // Push the value of cumuTotal onto the array
  cookieArray.push(cumuTotal);


////////////////////////////////////
// CREATING LOOP TO WRITE TO PAGE
// SCARED TO TEST, BUT I'M GONNA 
// IT WORKS - HALLELUJAH, BUT
// IT GIVES THE SAME NUMBER EACH TIME
// NEED TO CHASE DOWN WHY AND MAKE
// EACH LI A RANDOM VALUE TO MATCH
// THE COOKIE VALUES
////////////////////////////////////

  var writeToPage = function () {
    // this creates the list item to be filled on the HTML page
    var writeNumOfCookies = document.createElement('li');  // what is this information ?
    
    // Testing getting text on HTML
    writeNumOfCookies.textContent = (numOfCookies);       // what is this information ?
    // document.textContent('SEE THIS ?');       // what is this information ?
        
    var testPike = document.getElementById('pike');
    
    // document.appendChild();       // this appends the information to
                                     // whatever element comes before
    testPike.appendChild(writeNumOfCookies);
    }
    // SETTING FOR LOOP TO TEST ITERATION OF TEXT GENERATION
    for (var i = 0; i < custPerHourArray.length; i++) {
      writeToPage();
    }


// MAKE THE TABLE

// EVERYTHING WORKS TO THE END OF CURRENT CODE

  // get the array of numOfCookies and cumuTotal 
  // to come out
  return cookieArray;
}

  // // Everything is working to this point==================================================

// Working this out in Repl


   
var testCustArray = custPerHourArray();
// Set up a test with passed parameters to see if
// the function sumCookies works
// Passed in random numbers of cust/hour in array 
// and avgCookiePerCust for Pike to test
// and it works
var testCookieArray = sumCookies(custPerHourArray(),       storeDetails.avgCookiePerCust);

// Checking to see if everything works
// and it seems to
console.log('testCustArray' + testCustArray);
console.log('testCookieArray' + testCookieArray);

// Everything is working to this point===========================================

sumCookies                   // SeaTac

// =============================================








var storeDetailsSeaCtr = {
  storeNumber: '3',
  storeLocation: 'Seattle Center',
  minCustPerHourSeaCtr: 11,
  maxCustPerHourSeaCtr: 38,
  avgCookiePerCustSeaCtr: 3.7, 
  
   getRandomIntInclusive: function () { 
    return Math.floor(Math.random() * (this.maxCustPerHourSeaCtr - this.minCustPerHourSeaCtr + 1)) + this.minCustPerHourSeaCtr; //The maximum is inclusive and the minimum is inclusive 
  }
}
//console.log('Store Details SeaCtr: ', storeDetailsSeaCtr);
console.log('RandomSeaCtr: ', storeDetailsSeaTac.getRandomIntInclusive());

var storeDetailsCapHill = {
  storeNumber: '4',
  storeLocation: 'Capitol Hill',
  minCustPerHourCapHill: 20,
  maxCustPerHourCapHill: 38,
  avgCookiePerCustCapHill: 2.3,
  
  getRandomIntInclusive: function () { 
    return Math.floor(Math.random() * (this.maxCustPerHourSeaCtr - this.minCustPerHourSeaCtr + 1)) + this.minCustPerHourSeaCtr; //The maximum is inclusive and the minimum is inclusive 
  }
}
//console.log('Store Details CapHill: ', storeDetailsCapHill);
console.log('RandomCapHill: ', storeDetailsSeaTac.getRandomIntInclusive());


var storeDetailsAlki = {
  storeNumber: '5',
  storeLocation: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerCust: 4.6,
  
  getRandomIntInclusive: function () { 
    return Math.floor(Math.random() * (this.maxCustPerHourSeaCtr - this.minCustPerHourSeaCtr + 1)) + this.minCustPerHourSeaCtr; //The maximum is inclusive and the minimum is inclusive 
  }
}
// console.log('Store Details Alki: ', storeDetailsAlki);
console.log('RandomAlki: ', storeDetailsSeaTac.getRandomIntInclusive());


 // calculateRandom: function () {
//    return this.Math.floor(Math.random() * (storeDetailsAlki.maxCustPerHour //- storeDetailAlki.minCustPerHour + 1)) + storeDetailAlki.minCustPerHour;
//}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
getRandomIntInclusive(2,16);
