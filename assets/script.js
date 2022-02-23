// DOM elements
var formEl = document.querySelector("#main-form");
var numInput = document.querySelector("#number-list");
var maxInput = document.querySelector("#max-input");
var resultsContainer = document.querySelector("#table-container");

var formSubmitHandler = function (event) {
  event.preventDefault();

  // check to see if results container already has results and clear
  // get value for number input and create variable for tableNumber
  var tableNumber = numInput.value;
  // get value for max input and create variable for maxNumber
  var maxNumber = maxInput.value;
  // create array for our numbers Array
  var numArray = [];
  // parse tableNumber back into an integer
  var parsedTableNumber = parseInt(tableNumber);
  // create for loop and push results into number array
  for (var i = parsedTableNumber; i <= maxNumber; i += 9) {
    numArray.push(i);
  }
  console.log(numArray);
  // create header for table and add to dom
  var tableHeaderEl = document.createElement("h2");
  tableHeaderEl.className = "text-light text-center";
  tableHeaderEl.textContent = "Table for Number " + parsedTableNumber;
  resultsContainer.appendChild(tableHeaderEl);
  // create variable for numbers array length
  var instances = numArray.length;
  // add instances to dom
  var instancesEl = document.createElement("p");
  instancesEl.className = "fs-5 text-light text-center";
  instancesEl.textContent = "Instances to " + maxNumber + " : " + instances;
  resultsContainer.appendChild(instancesEl);
  // create table
  var tableEl = document.createElement("table");
  tableEl.className = "table table-dark table-striped";
  resultsContainer.appendChild(tableEl);
  // create for loop to loop over numbers area and create table elements
  for (var i = 0; i <= numArray.length; i++) {
    // create table row
    var tableRowEl = document.createElement("tr");
    tableEl.appendChild(tableRowEl);
    // create variable for current number
    var currentNumber = numArray[i];
    // crate table data element for current number
    var curNumTableData = document.createElement("td");
    curNumTableData.textContent = currentNumber;
    tableRowEl.appendChild(curNumTableData);
    // check to see if current number is greater than our main number
    if (currentNumber > parsedTableNumber) {
      // break apart current number into digit array
      var digits = currentNumber.toString().split("");
      //var digitsArray = digits.map(Number);
      // create variable for sum of digits array
      var digitSum = 0;
      // create loop to add together digits
      // for (var i = 0; i <= digitsArray.length; i++) {}
      console.log(digits);
    }
  }

  // take each number from array and print the sum of each digit
  // - until it reaches the original table number
  // - ie: tableNumber is 2, second index would be 11, it takes 11 and
  // - breaks it down to 1 + 1 = 2, stops because we are at tableNumber
  // - next index is 20, breaks down to 2 + 0 and stops because it's 2
  // - fourth index is 29, breaks down to 9 + 2 = 11, continues to
  // - 1 + 1 = 2 then stops
};

formEl.addEventListener("submit", formSubmitHandler);
