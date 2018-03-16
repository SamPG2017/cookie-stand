"use strict";

// GLOBAL VARIABLE DECLARATION
var storeHours = [ '6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];
var storeArray = [];
var cookieArray = [];
//var customersPerHour = Store.prototype.custPerHourArray();
var customersPerHour = [];
var cumuTotal = 0;
var cookieData = [];
var cookieSalesTable = document.getElementById('cookieSalesTable');


function Store(storeLocation, minCustPerHour, maxCustPerHour, avgCookiePerCust) {
  this.storeLocation = storeLocation;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.custPerHour = [];                      // array of random numbers
  storeArray.push(this);                             // pushes random #s to store array
}
 
// FIRST FUNCTION -- MAKES THE RANDOM NUMBER ARRAY 
  Store.prototype.generateRandomSalesPerHour = function() {

    var random = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;

          for ( var i = 0; i < storeHours.length; i++) {
          this.custPerHour.push(random); 
        }                                               // END FOR LOOP
      // This returns the filled array of number of random customers
    return this.custPerHour;
      // END FIRST FUNCTION
  }
 
    // SECOND FUNCTION - CREATES COOKIES/PER/HOUR/ARRAY
    Store.prototype.sumCookies = function () {
    var customersPerHour = this.generateRandomSalesPerHour();
    for( var i = 0; i < customersPerHour.length; i++) {
      var numOfCookies = this.customersPerHour[i] * this.avgCookiePerCust;
      numOfCookies = Math.round(numOfCookies);
      cookieArray.push(numOfCookies);
      console.log(cookieArray);
      cumuTotal = cumuTotal + numOfCookies;

    }   // END FOR LOOP

    cookieArray.push(cumuTotal);     // RUNS THE cookieArray FUNCTION

    return cookieArray;
  }                                  // END SECOND FUNCTION

  //  create array of labels to use with cookie data
    this.createLabelArray = function() {

    return labelArray;
  }                                  // END createLabelArray FUNCTION

//  CREATE TABLE USING RENDER METHOD
    //  var dogTable = document.getElementById('dogs');


    // CREATE VARIABLES AS ARGUMENTS TO PASS IN TO OBJECTS
    var pike = new Store('1st and Pike', 23, 65, 6.3);
    var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
    var seactr = new Store('Seattle Center', 11, 38, 3.7);
    var caphill = new Store('Capitol Hill', 20, 38, 2.3);
    var alki = new Store('Alki', 2, 16, 4.6);
    console.log(storeArray);



    Store.prototype.render = function () {
      var trElement = document.createElement('tr');
      var tdElement = document.createElement('td');

      // give td content (Store Loc) eventually do it in a for loop
      tdElement.textContent = this.storeLocation;           
      trElement.appendChild(tdElement);

      // make another td for the avg cookies property
      tdElement = document.createElement('td');
      tdElement.textContent = this.sumCookies();
      //  tdElement.textContent = this.avgCookiePerCust;
      trElement.appendChild(tdElement);
      
      // append tr to table
      cookieSalesTable.appendChild(trElement);
      };                            // END OF RENDER FUNCTION FOR STORES

      function makeHeaderRow() {

      var headerTrElement = document.createElement('tr');
      var thElement = document.createElement('th');

      thElement.textContent = 'Store Location';
      headerTrElement.appendChild(thElement);

      cookieSalesTable.appendChild(headerTrElement);
      };                           // END OF MAKEHEADERROW FUNCTION 


    // CALL FUNCTIONS FOR HEADER & STORE ROWS


    makeHeaderRow();
    pike.render();
    seatac.render();
    seactr.render();
    caphill.render();
    alki.render();
