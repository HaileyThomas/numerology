var formEl = document.querySelector("#main-form");
var numInput = document.querySelector("#number-list");
var maxInput = document.querySelector("#max-input");
var resultsContainer = document.querySelector("#table-container");

var formSubmitHandler = function (event) {
  event.preventDefault();

  // check to see if results container already has a table and clear
  if (tableDiv) {
    // give name to state of element
    var state1 = tableDiv.getAttribute("data-state");
    // check to see if it is visible
    if (state1 === "visible") {
      // remove div
      tableDiv.remove();
    }
  }
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
  // create div to hold table
  var tableDiv = document.createElement("div");
  tableDiv.setAttribute("data-state", "visible");
  resultsContainer.appendChild(tableDiv);
  // create header for table and add to dom
  var tableHeaderEl = document.createElement("h2");
  tableHeaderEl.className = "text-light text-center";
  tableHeaderEl.textContent = "Table for Number " + parsedTableNumber;
  tableDiv.appendChild(tableHeaderEl);
  // create variable for numbers array length
  var instances = numArray.length;
  // add instances to dom
  var instancesEl = document.createElement("p");
  instancesEl.className = "fs-5 text-light text-center";
  instancesEl.textContent = "Instances to " + maxNumber + " : " + instances;
  tableDiv.appendChild(instancesEl);
  // create table
  var tableEl = document.createElement("table");
  tableEl.className = "table border border-3 table-dark fs-4";
  tableDiv.appendChild(tableEl);
  // create for loop to loop over numbers area and create table elements
  for (var i = 0; i <= numArray.length; i++) {
    // create table row
    var tableRowEl = document.createElement("tr");
    tableRowEl.className = "text-center";
    tableEl.appendChild(tableRowEl);
    // create variable for current number
    var currentNumber = numArray[i];
    // create table data element for current number
    var curNumTableData = document.createElement("td");
    curNumTableData.className = "col-2";
    curNumTableData.textContent = currentNumber;
    tableRowEl.appendChild(curNumTableData);
    // break apart current number into digit array
    var digits = [];
    digits = currentNumber.toString().split("");
    // parse digit string into integers
    var parsedDigits = digits.map((x) => parseInt(x));
    // add together parsed digits
    const reducer = (accumulator, curr) => accumulator + curr;
    var digitSum = parsedDigits.reduce(reducer);
    // create table data element for result
    var sumTableData = document.createElement("td");
    sumTableData.className = "col-2 p-2";
    sumTableData.textContent = digitSum;
    tableRowEl.appendChild(sumTableData);
    // check to see if digit sum is greater than starting number
    if (digitSum > parsedTableNumber) {
      // break apart digit sum
      var newDigits = [];
      newDigits = digitSum.toString().split("");
      // parse new digits from string to integers
      var parsedNewDigits = newDigits.map((x) => parseInt(x));
      // add together parsed digits
      var newSum = parsedNewDigits.reduce(reducer);
      // create table data element for result
      var newTableData = document.createElement("td");
      newTableData.className = "col-2";
      newTableData.textContent = newSum;
      tableRowEl.appendChild(newTableData);
      // check to see if new sum is greater than starting number
      if (newSum > parsedTableNumber) {
        // break apart num sum
        var lastDigits = [];
        lastDigits = newSum.toString().split("");
        // parse last digits from string to integers
        var parsedLastDigits = lastDigits.map((x) => parseInt(x));
        // add together parsed digits
        var lastSum = parsedLastDigits.reduce(reducer);
        // create table data element for last result
        var lastTableData = document.createElement("td");
        lastTableData.className = "col-2";
        lastTableData.textContent = lastSum;
        tableRowEl.appendChild(lastTableData);
      }
    }
  }
  //clear search bar after submit
  document.getElementById("number-list").value = "";
  document.getElementById("max-input").value = "";
};

formEl.addEventListener("submit", formSubmitHandler);
