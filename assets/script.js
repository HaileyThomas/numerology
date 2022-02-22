// DOM elements
var formEl = document.querySelector("#main-form");
var numInput = document.querySelector("#number-list");
var maxInput = document.querySelector("#max-input");
var resultsContainer = document.querySelector("#table-container");

var formSubmitHandler = function (event) {
  event.preventDefault();

  // check to see if results container already has results and clear
  // get value for number input and create variable for tableNumber
  // get value for max input and create variable for maxNumber
  // create array of numbers that starts with tableNumber plus 9,
  // - gets the sum, adds that to the next index of the array, then continues
  // - until the sum reaches the maxNumber
  // take each number from array and print the sum of each digit
  // - until it reaches the original table number
  // - ie: tableNumber is 2, second index would be 11, it takes 11 and
  // - breaks it down to 1 + 1 = 2, stops because we are at tableNumber
  // - next index is 20, breaks down to 2 + 0 and stops because it's 2
  // - fourth index is 29, breaks down to 9 + 2 = 11, continues to
  // - 1 + 1 = 2 then stops
};

formEl.addEventListener("submit", formSubmitHandler);
