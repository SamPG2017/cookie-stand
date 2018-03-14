"use strict";


// testing whether the html page sees this particular file
// alert ('hey, do you see this ?'); // test passed


// Create all object literals for five stores provided, using information provided along with names

// var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var hoursWorked = 16;

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

var storeDetails = {
  storeNumber: "1",
  storeLocation: '1st and Pike',
  hours: 16, 
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  
  
  // THIS IS THE PART THAT RETURNS A RANDOM NUMBER 
  // BASED ON THE MIN/MAX PER STORE =============
  // THIS FUNCTION NEEDS TO BE GENERATED THE NUMBER OF 
  // TIMES THAT THERE ARE HOURS 
  getRandomIntInclusive: function () { 
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; //The maximum is inclusive and the minimum is inclusive 
  }
}

var avgCookiePerCust = storeDetails.avgCookiePerCust; 
console.log('avgCookiePerCust is: ', typeof avgCookiePerCust);
//console.log('Store Details Pike: ', storeDetailsPike);

console.log('LINE 22 -- Random Number for Pike (bt 22 & 65): ', typeof storeDetails.getRandomIntInclusive());

// THIS NEEDS TO BE SET UNDER THE FOR LOOP TO GENERATE
// 16 DIFFERENT NUMBERS

// WRAP THIS FUNCTION FOR ONE HOUR'S SALES INTO 
// A FOR LOOP FOR SOME NUMBER OF HOURS

var hoursPerDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function multiply ( ) {
  // I want the avgCookiePerCust * RandomPike

   var product = (randomPike * storeDetails.avgCookiePerCust);
   console.log(' LINE 39 -- Cookie Sales per hour: ', product);
   return Math.round(product);
    }

  for (i = 0; i < hoursPerDay.length; i++) {
  // do this thing
  // multiply avgCookiePerCust * RandomPike the number 
  // of times in the array of hours 

var randomPike = storeDetails.getRandomIntInclusive();
console.log(typeof randomPike); 
   // THIS CODE WORKS TO GET THE PRODUCT FOR ONE HOUR'S WORTH OF SALES -- 
  multiply(avgCookiePerCust, randomPike);
  }
   
  var newPike = document.createElement('li');
  var newTextPike = document.createTextNode('Pike');
  newPike.appendChild(newTextPike);
  var position = document.getElementsByTagName('ul')[0];
  position.appendChild(newPike);


// =============================================

var storeDetailsSeaTac = {
  storeNumber: "2",
  storeLocation: 'SeaTac Airport',
  minCustPerHourSeaTac: 3,
  maxCustPerHourSeaTac: 24,
  avgCookiePerCustSeaTac: 1.2,

  getRandomIntInclusive: function () { 
    return Math.floor(Math.random() * (this.maxCustPerHourSeaTac - this.minCustPerHourSeaTac + 1)) + this.minCustPerHourSeaTac; //The maximum is inclusive and the minimum is inclusive 
  }
}
//console.log('Store Details SeaTac: ', storeDetailsSeaTac);
console.log('RandomSeaTac: ', storeDetailsSeaTac.getRandomIntInclusive());

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
