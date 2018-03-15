"use strict";

// testing whether the html page sees this particular file
// alert ('hey, do you see this ?'); // test passed

// Create object constructor for five stores provided, using information provided along with names

function Store(storeLoc, minCustPerHour, maxCustPerHour, avgCookiePerCust, divHTML) {
  this.storeLocation = storeLoc;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.div             = divHTML;
  this.generateRandomSalesPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  }

  // THIS IS THE FUNCTION THAT MAKES THE ARRAY 
  this.custPerHourArray = function() {
    // Declare custPerHour as an empty array
    var custPerHour = [];  
    var numberOfHours = 15;   // number of hours stores are open

    for ( var i = 0; i < numberOfHours; i++) {
      var random = this.generateRandomSalesPerHour();
    
   // Add to custPerHour array above one number at a 
   // time based on the for loop run 15 times
      custPerHour.push(random); 
    
    // end of the for loop
    }
  // This returns the filled array of number of random customers
  return custPerHour;
    // END OF THE FIRST FUNCTION
  }

  this.sumCookies = function () {
    // set cookieArray = an empty array to be filled
    var cookieArray = [];
    // create variable that stores the custPerHourArray
    var customersPerHour = this.custPerHourArray();
    var cumuTotal = 0;
    
    for( var i = 0; i < customersPerHour.length; i++) {
      var numOfCookies = customersPerHour[i] * this.avgCookiePerCust;
      numOfCookies = Math.round(numOfCookies);
      cookieArray.push(numOfCookies);
      cumuTotal = cumuTotal + numOfCookies;
      
    }
    cookieArray.push(cumuTotal);

    return cookieArray;
  }

  this.writeToPage = function () {
    // this creates the list item to be filled on the HTML page
    var sumCookieArray = this.sumCookies();
    var writeNumOfCookies = document.createElement('li');  // what is this information ?
  
    // Testing getting text on HTML
    //writeNumOfCookies.textContent = (writeCookieNum);       // what is this information ?
    // document.textContent('SEE THIS ?');       // what is this information ?
        
    //var testPike = document.getElementById('pike');
    
    // document.appendChild();       // this appends the information to
                                     // whatever element comes before
    //testPike.appendChild(writeNumOfCookies);
    
    // SETTING FOR LOOP TO TEST ITERATION OF TEXT GENERATION
    for (var i = 0; i < sumCookieArray.length; i++) {
      //writeToPage(sumCookieArray[i]);
      var writeNumOfCookies = document.createElement('li');  // what is this information ?
  
      // Testing getting text on HTML
      writeNumOfCookies.textContent = (sumCookieArray[i]);       // what is this information ?
      // document.textContent('SEE THIS ?');       // what is this information ?
        
      var testPike = document.getElementById("pike");
      testPike.appendChild(writeNumOfCookies);
    }
  }
}

var pike = new Store('1st and Pike', 23, 65, 6.3, 'pike');
pike.writeToPage();

var seatac = new Store('SeaTac Airport', 3, 24, 1.2, 'seatac')
seatac.writeToPage();

var SeaCtr = new Store('Seattle Center', 11, 38, 3.7, 'seactr')
var CapHill = new Store('Capitol Hill', 20, 38, 2.3, 'caphill')
var Alki = new Store('Alki', 2, 16, 4.6, 'alki')

var testList = document.createElement('ul');



