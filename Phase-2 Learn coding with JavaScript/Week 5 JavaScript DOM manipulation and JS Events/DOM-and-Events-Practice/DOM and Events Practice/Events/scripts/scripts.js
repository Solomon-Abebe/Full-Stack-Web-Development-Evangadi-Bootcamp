function checkF() {}

let a = document.getElementById("registration-form");
a.onsubmit = checkF;

// Traditional DOM Event handlers
var el = document.getElementById("change-bg1");
el.onclick = changeBackground;

var el2 = document.getElementById("removeBgh3");
el2.onmouseover = removeBackground;

// Change background color to Red
function changeBackground() {
  document.body.style.backgroundColor = "#f56a79";
}
// Remove background color from the body
function removeBackground() {
  document.body.style.backgroundColor = "";
}

// /*
// 		How about if we want to use the class name for selection? What would be different?
// 	*/
// var el = document.getElementsByClassName("dom-change-bg");
// console.log(el);

// var firstElemnet = el[0];
// firstElemnet.onmouseover = changeBackground;
// firstElemnet.onmouseout = removeBackground;

// Event listeners
var el = document.getElementById("change-bg-listener");
el.addEventListener("click", changeBackground);

// // Change to night mode
var el = document.getElementById("nightmode");
// console.log(el);
el.addEventListener("click", nightmode);

function nightmode() {
  let el = document.getElementsByTagName("body");
  el[0].classList.add("nightmode");
}

// Form Controller Exercise
/* 
  Requirements: 
    - Check if the first name and Password fields are left empty when submit button is clicked 
    - If left empty, display a warning at the top saying 
      - First name field is required 
      - Password field is required 
      - Prevent default 
    - If not empty, but password provided is less than 5 characters, display a message saying "Password is empty or not strong enough" 
    
    Bonus 
    ***** 
    - Just to be more interactive, provide feedback if user focuses on the first name and password fields and leave with out completing the requirements 
    - Also, change the borders of the fields with errors with to red 
*/

/* Form checker on submit */
var el = document.getElementById("registration-form");
el.onsubmit = formSubmitChecker;

function formSubmitChecker(e) {
  // Psudo code
  // declare a variable array, to collect errors

  // CHECK IF the value of the f Name is empty
  // use value property to find the entered value
  // If this is empty, add to the error array
  // What message (add to this to the array)
  // use innerHTML on errorsDisplay
  // Use  getElementById to choose the element

  // CHECK IF the value of the password is less than 5 char
  // use value property to find the entered value
  // If this is less than 5 (use length property), add to the error array
  // What message (message )
  // use innerHTML on errorsDisplay
  // Use  getElementById to choose the element

  // if error is empty submit
  // else
  // Stop the default behavior of the HTML from submitting the form
  // using preventDefault()

  // iterate through the error array and display each message on the errorsDisplay
  //   use innerHTML on errorsDisplay

  // Put elements in variable
  var errors = [];
  var elErrorsDisplay = document.getElementById("errorsDisplay");
  elErrorsDisplay.innerHTML = "";

  var elFirstName = document.getElementsByName("first-name");

  var elPassword = document.getElementsByName("password");
  // Get their values
  var elFirstNameValue = elFirstName[0].value;
  var elPasswordValue = elPassword[0].value;

  if (!elFirstNameValue) {
    errors.push("First name field is required");
  }
  if (!elPasswordValue) {
    errors.push("Password is empty");
  } else if (elPasswordValue.length < 5) {
    errors.push("Password not strong enough");
  } else {
  }
  // if (elPasswordValue.length < 5) {
  //   errors.push("Password is empty or not strong enough");
  // }
  // console.log(errors);
  if (errors.length > 0) {
    e.preventDefault(); // Stops the form from submitting
    elErrorsDisplay.style.display = "block";
    for (var i = 0; i < errors.length; i++) {
      elErrorsDisplay.innerHTML += errors[i] + "<br>";
    }
  } else {
    alert("Submitted");
  }
}

/* Form checker first name on blur */
var elFirstName = document.getElementsByName("first-name");
var elFirstNameElement = elFirstName[0];
elFirstNameElement.onblur = checkIfNameIsEmpty;

/* Form checker password on blur */
var elPassword = document.getElementsByName("password");
var elPasswordElement = elPassword[0];
elPasswordElement.onblur = checkIfPasswordQualifies;

function checkIfNameIsEmpty() {
  var elErrorsDisplay = document.getElementById("errorsDisplay");
  var elFirstName = document.getElementsByName("first-name");
  var elFirstNameElement = elFirstName[0];
  var elFirstNameElementValue = checkIfNameIsEmpty.value;
  if (!elFirstNameElementValue) {
    elErrorsDisplay.style.display = "block";
    elErrorsDisplay.innerHTML += "First name field is required <br>";
    elFirstNameElement.style.border = "1px solid pink";
  }
}

function checkIfPasswordQualifies() {
  var elErrorsDisplay = document.getElementById("errorsDisplay");
  var elPassword = document.getElementsByName("password");
  console.log(elPassword);

  var elPasswordElement = elPassword[0];
  var elPasswordValue = elPassword[0].value;
  if (elPasswordValue.length < 5) {
    elErrorsDisplay.style.display = "block";
    elErrorsDisplay.innerHTML += "Password is empty or not strong enough <br>";
    elPasswordElement.style.border = "1px solid pink";
  }
}
