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
    // create table data element for current number
    var curNumTableData = document.createElement("td");
    curNumTableData.textContent = currentNumber;
    tableRowEl.appendChild(curNumTableData);
    // break apart current number into digit array
    var digits = [];
    digits = currentNumber.toString().split("");
    // parse digit string into integers
    var parsedDigits = digits.map((x) => parseInt(x));
    console.log("parsedDigits: " + parsedDigits);
    console.log("parsedDigits.length: " + parsedDigits.length);
    // add together parsed digits
    const reducer = (accumulator, curr) => accumulator + curr;
    var digitSum = parsedDigits.reduce(reducer);
    console.log("digitSum: " + digitSum);
    // create table data element for result
    var sumTableData = document.createElement("td");
    sumTableData.textContent = digitSum;
    tableRowEl.appendChild(sumTableData);
  }
};

formEl.addEventListener("submit", formSubmitHandler);
