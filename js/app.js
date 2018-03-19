"use strict";

  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.custPerHour = [];                      // array of random numbers
  this.cookieArray = [];                      // calculate array of cookies each hour
  storeArray.push(this);                      // pushes random #s to store array
}
 
// FIRST FUNCTION -- MAKES THE RANDOM NUMBER ARRAY FOR CUSTOMERS PER HOUR 
  Store.prototype.generateRandomSalesPerHour = function() {

    //Use storeHours.length - 1 because the last element of storeHours is the Total label
    //and we don't want to generate a cookie count for that. It gets calculated by summing the
    //other generated values.
    for ( var i = 0; i < storeHours.length - 1; i++) {
      var random = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
      this.custPerHour.push(random); 
     }                                               // END FOR LOOP
      // This returns the filled array of number of random customers
    //return this.custPerHour;
      // END FIRST FUNCTION
  }
 
    // SECOND FUNCTION - CREATES COOKIES/PER/HOUR/ARRAY
  Store.prototype.sumCookies = function () {
    //console.log(this.generateRandomSalesPerHour());
    //console.log(customersPerHour);
    this.generateRandomSalesPerHour();
    //console.log(this.custPerHour);
    var cumuTotal = 0;
    
    for( var i = 0; i < this.custPerHour.length; i++) {
      var numOfCookies = this.custPerHour[i] * this.avgCookiePerCust;
      numOfCookies = Math.round(numOfCookies);
      this.cookieArray.push(numOfCookies);
      //console.log(cookieArray);
      cumuTotal = cumuTotal + numOfCookies;
    }                                           // END FOR LOOP

    this.cookieArray.push(cumuTotal);           // push total onto end of array


  }

  /*
    // var thElement2 = document.createElement('th');

       for (var i = 0; i < storeHours.length; i++) {
        thElement2.textContent = storeHours;                // Current line being tested
        headerTrElement.appendChild(thElement2);

        cookieSalesTable.appendChild(headerTrElement);
    }
  };       */                    // END OF MAKEHEADERROW FUNCTION 



  // THIS IS THE FUNCTION THAT PRINTS THE INFORMATION TO THE 
  // WEBPAGE IN A TABLE FORMAT
  Store.prototype.render = function () {
    this.sumCookies();
    //console.log(this.cookieArray);
    
    var trElement = document.createElement('tr');
    var tdElementLocation = document.createElement('td');
    ///  tdElementLocation.style.width = '20%';

    // give td content (Store Loc) -- this doesn't iterate
    // it's created when the arguments are passed in
    // for all five object
    tdElementLocation.textContent = this.storeLocation;           
    trElement.appendChild(tdElementLocation);

    // make another td for the cookies each hour
    var tdElementCookies = document.createElement('td');
    /// tdElementHours.style.width = '80%';
    tdElementCookies.textContent = '';

        for(var i = 0; i < storeHours.length; i++) {
          
          // tdElementHours.textContent += storeHours[i] + ' ' + this.cookieArray[i];      // Removing store hours 
          tdElementCookies.textContent += this.cookieArray[i];
          //  tdElementHours.textContent += storeHours[i] + ' ' + this.sumCookies[i];
        //console.log(tdElement.textContent);
    }
    //  tdElement.textContent = this.sumCookies();
    //  tdElement.textContent = this.avgCookiePerCust;
    trElement.appendChild(tdElementCookies);
    
    // append tr to table
    cookieSalesTable.appendChild(trElement);
  };  // END OF RENDER FUNCTION FOR STORES




  //  create array of labels to use with cookie data
  //  this.createLabelArray = function() {

//    return labelArray;
//  }                                  // END createLabelArray FUNCTION

//  CREATE TABLE USING RENDER METHOD
    //  var dogTable = document.getElementById('dogs');


    // CREATE VARIABLES AS ARGUMENTS TO PASS IN TO OBJECTS
    var pike = new Store('1st and Pike', 23, 65, 6.3);
    var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
    var seactr = new Store('Seattle Center', 11, 38, 3.7);
    var caphill = new Store('Capitol Hill', 20, 38, 2.3);
    var alki = new Store('Alki', 2, 16, 4.6);
    //console.log(storeArray);


    // CALL FUNCTIONS FOR HEADER & STORE ROWS

    makeHeaderRow();
    pike.render();
    seatac.render();
    seactr.render();
    caphill.render();
    alki.render();
