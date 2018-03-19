// We have already put an empty <table> element in the HTML, with id="dogs" 

// We need an array to hold our dogs
var allDogs = [];
// We need to access the table that is in the DOM
var dogTable = document.getElementById('dogs');
// We need a constructor to make our dog objects
function Dog(name, color, breed, nickname) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nickname = nickname;
  allDogs.push(this);
}

// Let's refactor so that render() method is on the constructor's prototype; this will tidy up the way things look on the screen
Dog.prototype.render = function () {
  // create tr
  var trElement = document.createElement('tr');
  // create td
  var tdElement = document.createElement('td');
  // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
  tdElement.textContent = this.name;
  // append td to tr
  trElement.appendChild(tdElement);

  // make another td for the color property
  tdElement = document.createElement('td');
  tdElement.textContent = this.color;
  trElement.appendChild(tdElement);
  
  // make another td for the breed property
  tdElement = document.createElement('td');
  tdElement.textContent = this.breed;
  trElement.appendChild(tdElement);
  
  // make another td for the nickname property
  tdElement = document.createElement('td');
  tdElement.textContent = this.nickname;
  trElement.appendChild(tdElement);

  // append tr to table
  dogTable.appendChild(trElement);
};

// We need to create our Dog instances
var gary = new Dog('Gary', 'White', 'Westie', 'Gare Bear');
var charlotte = new Dog('Charlotte', 'White', 'Westie', 'Goose');
var ollivander = new Dog('Ollivander', 'Tan', 'French Bulldog', 'Ollie');
var buddy = new Dog('Buddy', 'Black', 'Labra-Doodle', '');
var demi = new Dog('Demi', 'Black and White', 'Border Collie', null);
var izzy = new Dog('Izzy', 'Black', 'Lab-Pit', 'Porkchop');
var theHound = new Dog('The Hound', 'Grey', 'Domestic Short-hair', 'Hound');

// We need a separate function to make the table header, but it does not need to available for each Dog instance. We only need it once and it does not use contextual "this"
function makeHeaderRow() {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Name';
  headerTrElement.appendChild(thElement);

  thElement = document.createElement('th');
  thElement.textContent = 'Color';
  headerTrElement.appendChild(thElement);
  
  thElement = document.createElement('th');
  thElement.textContent = 'Breed';
  headerTrElement.appendChild(thElement);

  thElement = document.createElement('th');
  thElement.textContent = 'Nickname';
  headerTrElement.appendChild(thElement);

  dogTable.appendChild(headerTrElement);
}

// It would be nice to have a single function that renders all of the individual dog rows...

// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows
makeHeaderRow();
gary.render();
charlotte.render();
ollivander.render();
buddy.render();
demi.render();
izzy.render();
theHound.render();