"use strict"


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
//console.log('Store Details Pike: ', storeDetailsPike);
console.log('RandomPike: ', storeDetailsPike.getRandomIntInclusive());


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
