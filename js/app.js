"use strict";

var storeDetails = {
  storeNumber: "1",
  storeLocation: '1st and Pike',
  hours: 16,
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,

  getRandomIntInclusive: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  }
};

var avgCookiePerCust = storeDetails.avgCookiePerCust;

function custPerHourArray() {

  var custPerHour = [];
  var numberOfHours = 15;

  for (var i = 0; i < numberOfHours; i++) {
    var randomPike = storeDetails.getRandomIntInclusive();

    custPerHour.push(randomPike);
  }

  return custPerHour;
}

function sumCookies(custPerHourArray, avgCookies) {

  var cookieArray = [];
  var cumuTotal = 0;

  for (var i = 0; i < custPerHourArray.length; i++) {

    var numOfCookies = custPerHourArray[i] * avgCookies;
    numOfCookies = Math.round(numOfCookies);

    cookieArray.push(numOfCookies);

    cumuTotal = cumuTotal + numOfCookies;
  }

  cookieArray.push(cumuTotal);

  return cookieArray;
}

var testCustArray = custPerHourArray();
var testCookieArray = sumCookies(custPerHourArray(), storeDetails.avgCookiePerCust);

var storeDetailsSeaTac = {
  storeNumber: "2",
  storeLocation: 'SeaTac Airport',
  minCustPerHourSeaTac: 3,
  maxCustPerHourSeaTac: 24,
  avgCookiePerCustSeaTac: 1.2,

  getRandomIntInclusive: function () {
    return Math.floor(Math.random() * (this.maxCustPerHourSeaTac - this.minCustPerHourSeaTac + 1)) + this.minCustPerHourSeaTac;
  }
}

var storeDetailsSeaCtr = {
  storeNumber: '3',
  storeLocation: 'Seattle Center',
  minCustPerHourSeaCtr: 11,
  maxCustPerHourSeaCtr: 38,
  avgCookiePerCustSeaCtr: 3.7,

  getRandomIntInclusive: function () {
    return Math.floor(Math.random() * (this.maxCustPerHourSeaCtr - this.minCustPerHourSeaCtr + 1)) + this.minCustPerHourSeaCtr;
  }
}

var storeDetailsCapHill = {
  storeNumber: '4',
  storeLocation: 'Capitol Hill',
  minCustPerHourCapHill: 20,
  maxCustPerHourCapHill: 38,
  avgCookiePerCustCapHill: 2.3,

  getRandomIntInclusive: function () {
    return Math.floor(Math.random() * (this.maxCustPerHourSeaCtr - this.minCustPerHourSeaCtr + 1)) + this.minCustPerHourSeaCtr;
  }
}

var storeDetailsAlki = {
  storeNumber: '5',
  storeLocation: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerCust: 4.6,

  getRandomIntInclusive: function () {
    return Math.floor(Math.random() * (this.maxCustPerHourSeaCtr - this.minCustPerHourSeaCtr + 1)) + this.minCustPerHourSeaCtr;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(2, 16);


var listElement = document.getElementById('storelist');

var ulElement = document.createElement('ul');

var pikeElement = document.createElement('li');
pikeElement.textContent = storeDetails.storeLocation;
ulElement.appendChild(pikeElement);

var seaTacElement = document.createElement('li');
seaTacElement.textContent = storeDetailsSeaTac.storeLocation;
ulElement.appendChild(seaTacElement);

var seaCtrElement = document.createElement('li');
seaCtrElement.textContent = storeDetailsSeaCtr.storeLocation;
ulElement.appendChild(seaCtrElement);

var capHillElement = document.createElement('li');
capHillElement.textContent = storeDetailsCapHill.storeLocation;
ulElement.appendChild(capHillElement);

var alkiElement = document.createElement('li');
alkiElement.textContent = storeDetailsAlki.storeLocation;
ulElement.appendChild(alkiElement);

listElement.appendChild(ulElement);

