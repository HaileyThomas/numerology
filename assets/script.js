var formEl = document.querySelector("#main-form");

var formSubmitHandler = function (event) {
  event.preventDefault();
};

formEl.addEventListener("submit", formSubmitHandler);
