"use strict"

// Create all object literals for five stores provided, using information provided along with names
var storeDetailsPike = {
  storeNumber: "1",
  storeLocation: '1st and Pike',
  minCustPerHourPike: 23,
  maxCustPerHourPike: 65,
  avgCookiePerCustPike: 6.3
}
console.log('Store Details Pike: ', storeDetailsPike);

var storeDetailsSeaTac = {
  storeNumber: "2",
  storeLocation: 'SeaTac Airport',
  minCustPerHourSeaTac: 3,
  maxCustPerHourSeaTac: 24,
  avgCookiePerCustSeaTac: 1.2
}

console.log('Store Details SeaTac: ', storeDetailsSeaTac);

var storeDetailsSeaCtr = {
  storeNumber: '3',
  storeLocation: 'Seattle Center',
  minCustPerHourSeaCtr: 11,
  maxCustPerHourSeaCtr: 38,
  avgCookiePerCustSeaCtr: 3.7
}

console.log('Store Details SeaCtr: ', storeDetailsSeaCtr);

var storeDetailsCapHill = {
  storeNumber: '4',
  storeLocation: 'Capitol Hill',
  minCustPerHourCapHill: 20,
  maxCustPerHourCapHill: 38,
  avgCookiePerCustCapHill: 2.3
}

console.log('Store Details CapHill: ', storeDetailsCapHill);

var storeDetailsAlki = {
  storeNumber: '5',
  storeLocation: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerCust: 4.6
}

 console.log('Store Details Alki: ', storeDetailsAlki);
 /*
var minCustPerHour = 2;
var maxCustPerHour = 16;

function getRandomIntInclusive (storeDetailsAlki.minCustPerHour, maxCustPerHour) {
  min = Math.ceil(minCustPerHour);
  max = Math.floor(maxCustPerHour);
  console.log('Min is equal to: ', minCustPerHour, ' and max is equal to: ', maxCustPerHour)
  return Math.floor(Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour;
}
getRandomIntInclusive(minCustPerHour,maxCustPerHour);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
*/

