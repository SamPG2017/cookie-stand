"use strict";


// Create all object literals for five stores provided, using information provided along with names
var storeDetailsPike = {
  storeNumber: "1",
  storeLocation: '1st and Pike',
  minCustPerHourPike: 23,
  maxCustPerHourPike: 65,
  avgCookiePerCustPike: 6.3,
  
  getRandomIntInclusive: function () { 
    return Math.floor(Math.random() * (this.maxCustPerHourPike - this.minCustPerHourPike + 1)) + this.minCustPerHourPike; //The maximum is inclusive and the minimum is inclusive 
  }
}

var avgCookiePerCustPike = storeDetailsPike.avgCookiePerCustPike; 
console.log('avgCookiePerCustPike is: ', typeof avgCookiePerCustPike);
//console.log('Store Details Pike: ', storeDetailsPike);
console.log('LINE 18 -- Random Number for Pike (bt 22 & 65): ', typeof storeDetailsPike.getRandomIntInclusive());

var RandomPike = storeDetailsPike.getRandomIntInclusive();
console.log(typeof RandomPike); 
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function multiply (a,b) {
  // multiply (avgCookiePerCustPike * RandomPike)
  // avgCookiePerCustPike has to be a property
  // of the Pike location so 
  // storeDetailsPike.avgCookiePerCustPike * RandomPike
   var product = (a * b);
   console.log('The product of a & b is: ', product);
   return Math.round(product);
 }
 
   // THIS CODE WORKS TO GET THE PRODUCT -- 
   // multiply(avgCookiePerCustPike, RandomPike);

  for (var i = 0; i < hoursArray.length; i++); {
    multiply(avgCookiePerCustPike, RandomPike);
 
  // multiply storeDetailsPike.avgCookiePerCustPerHourPike * RandomPike
  // return the product of avgCookiePerCustPike * RandomPike as a new var
//  multiply(storeDetailsPike.avgCookiePerCustPerHourPike, RandomPike);
//  count(i);
console.log('loop iteration: ' + (i+1));
//  return avgCookiePerCustPerHourPike;
}
  //storeDetailsPike.avgCookiePerCustPike * RandomPike; 
  
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
