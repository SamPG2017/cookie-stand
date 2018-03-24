"use strict";

var storeHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm ', 'Total '];

var storeArray = [];


function Store(storeLoc, minCustPerHour, maxCustPerHour, avgCookiePerCust, id) {
  this.storeLocation = storeLoc;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.elementId = id;
  this.cookieArray = [];

  storeArray.push(this);

  this.generateRandomSalesPerHour = function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  }

  // CREATE THE ARRAY FOR NUMBER OF RANDOM CUSTOMERS
  this.custPerHourArray = function () {

    var custPerHour = [];
    var numberOfHours = 15;

    for (var i = 0; i < numberOfHours; i++) {
      var random = this.generateRandomSalesPerHour();
      custPerHour.push(random);
    }
    return custPerHour;
  }

  // CREATE THE ARRAY FOR NUMBER OF COOKIES PER HOUR
  this.sumCookies = function () {
    var customersPerHour = this.custPerHourArray();
    var cumuTotal = 0;

    for (var i = 0; i < customersPerHour.length; i++) {
      var numOfCookies = customersPerHour[i] * this.avgCookiePerCust;
      numOfCookies = Math.round(numOfCookies);
      this.cookieArray.push(numOfCookies);
      cumuTotal = cumuTotal + numOfCookies;
    }

    this.cookieArray.push(cumuTotal);
  }
}

// FUNCTION TO PRINT INFO TO THE WEBPAGE AS A TABLE
Store.prototype.render = function () {
  var cookieArray = this.sumCookies();

  var trElement = document.createElement('tr');
  var tdElementLocation = document.createElement('td');

  tdElementLocation.textContent = this.storeLocation;
  trElement.appendChild(tdElementLocation);

  for (var i = 0; i < storeHours.length; i++) {

    var tdElementCookies = document.createElement('td');
    tdElementCookies.textContent = '';
    tdElementCookies.textContent += this.cookieArray[i];
    trElement.appendChild(tdElementCookies);
  }
  cookieSalesTable.appendChild(trElement);
};


function makeHeaderRow() {
  var tableHead = document.createElement('thead');
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'Store Location';
  headerTrElement.appendChild(thElement);

  for (var i = 0; i < storeHours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = storeHours[i];
    headerTrElement.appendChild(thElement);
    tableHead.appendChild(headerTrElement);
  }
  cookieSalesTable.appendChild(headerTrElement);
}

function makeFooterRow() {

  var tFootElement = document.createElement('tfoot');
  var footerTrElement = document.createElement('tr');
  var footerTdElement = document.createElement('td');
  footerTdElement.textContent = 'Totals';
  footerTrElement.appendChild(footerTdElement);

  for (var i = 0; i < storeHours.length; i++) {
    var tdElement2 = document.createElement('td');
    var cumuTotal = 0;

    for (var index = 0; index < storeArray.length; index++) {
      cumuTotal += storeArray[index].cookieArray[i];
    }

    tdElement2.textContent = '' + cumuTotal;
    footerTrElement.appendChild(tdElement2);
  }
  tFootElement.appendChild(footerTrElement);
  cookieSalesTable.appendChild(tFootElement);
}

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seactr = new Store('Seattle Center', 11, 38, 3.7);
var caphill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// CALL FUNCTIONS FOR HEADER & STORE ROWS
makeHeaderRow();
pike.render();
seatac.render();
seactr.render();
caphill.render();
alki.render();
makeFooterRow();





