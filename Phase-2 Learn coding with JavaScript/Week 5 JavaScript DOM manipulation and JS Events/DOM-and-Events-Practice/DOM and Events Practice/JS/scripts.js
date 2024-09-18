// let el = document.getElementsByClassName("red");
// console.log(el);
// console.log(el.item(2));
// console.log(el[1]);
// let elArray = [...el];
// for (let i = 0; i < el.length; i++) {
//   elArray.push(el[i]);
// }
// console.log(elArray);
// for (let i = 0; i <input elArray.length; i++) {
//   elArray[i].className = "blue";
//   elArray[i].textContent = "Google";
// }
// console.log(elArray);
let uoli = document.querySelectorAll(".red"); //NodeList
console.log(uoli);
console.log(document.querySelectorAll("li"));
// Selecting using array syntax:
console.log(uoli[1]);
// Selecting one element from a nodeList using the item method
console.log(uoli.item(0));

//getElementsByClassName():
console.log(document.getElementsByClassName("red")); // HTML collection

//getElementsByTagName() method

console.log(document.getElementsByTagName("li")); //HTML collection

let elTag = document.getElementsByTagName("li");
console.log(elTag.item(1));
console.log(elTag[1]);

//NodeList vs HTMLCollection
let nodeList = document.querySelectorAll("li");
let htmlCollection = document.getElementsByTagName("li");
// console.log(nodeList.length);
// console.log(htmlCollection.length);
const eleventhList = document.createElement("li");
eleventhList.className = "yellow";
eleventhList.textContent = "Netflix";
document.getElementById("techCompanies").appendChild(eleventhList);
console.log(nodeList.length);
console.log(htmlCollection.length);

// console.log(document.querySelectorAll("li").length);
// console.log(document.getElementsByTagName("li").length);

//Traversing
//Downward traversing
console.log("%c Downward traversing", "font-weight:bold; font-size:1.5em");
console.log(document.getElementById("techCompanies").firstElementChild);
console.log(document.getElementById("techCompanies").lastElementChild);
console.log(document.getElementById("techCompanies").children[2]);

//using querySelector
console.log("using querySelector");
console.log(
  document.querySelector("#techCompanies li:nth-child(2)").textContent
);
//Traversing upwards:

console.log("%c Traversing upwards:", "font-weight:bold; font-size:1.5em");
console.log(
  document.getElementById("techCompanies").children[2].closest(".blue")
    .textContent
);
console.log(document.getElementById("techCompanies").parentElement.textContent);
/* console.log(document.getElementsByClassName("red").parentElement); this returns collection of html elements and . parentElement should be used with single DOM elements(if(document.getElementsByClassName("red").length>0)){ let firstChildEle = document.getElementsByClassName("red")[0]; let parent = firstChildEle. parentElement; } */

// Traversing Sideways:
console.log("%c Traversing Sideways", "font-weight: bold; font-size:1.5em");
console.log(document.getElementById("blue").previousElementSibling.textContent);
console.log(document.getElementById("blue").nextElementSibling.textContent);
console.log(document.querySelector(".blue").previousElementSibling);
//Altering values (working with HTML content)
// console.log("Altering values (working with HTML content)");
console.log(
  "%c Altering values (working with HTML content)",
  "font-weight: bold; font-size: 1.5em"
);
// let newElem = document.createElement("li");
// newElem.className = "red";
// newElem.id = "red";
// newElem.textContent = "Facebook";
// let parentElem = document.getElementById("techCompanies");
// parentElem.appendChild(newElem);
// console.log(parentElem);

//prepend
// let newElem2 = document.createElement("li");
// parentElem.prepend(newElem2);
// newElem2.className = "blue amazon";
// console.log(document.getElementsByClassName("amazon"));
// console.log(newElem2.classList);
// console.log(newElem2.className);
// newElem2.id = "blue";
// newElem2.textContent = "Amazon";
/* let newElem2 = parentElem.prepend(
  Object.assign(document.createElement("li"), {
    className: "blue",
    id: "blue",
    textContent: "Amazon",
  })
); */

// console.log(parentElem);
// Inner HTML
console.log("%c innerHTML", "font-weight:bold; font-size:1.5em");
let paRent = document.getElementById("techCompanies");
console.log(paRent.innerHTML);

//removechild
let parentContainer = document.getElementById("techCompanies");
// let lastChildElem = parentContainer.lastChild;
let lastChildElem =
  parentContainer.children[parentContainer.children.length - 1];

console.log(lastChildElem.textContent);
parentContainer.removeChild(lastChildElem);
let secondChildElem = parentContainer.children[1];
console.log(secondChildElem.textContent);
parentContainer.insertBefore(lastChildElem, secondChildElem);
// console.log(parentContainer.textContent);
console.log(parentContainer.innerText);

// Altering values (working with HTML attribute)
console.log(
  "%c Altering values (working with HTML attribute)",
  "font-weight:bold; font-size:1.5em"
);

console.log(parentContainer.hasAttribute("name"));

lastChildElem.className = "blue facebook";
console.log(document.getElementsByClassName("facebook"));
console.log(lastChildElem.classList);
console.log(lastChildElem.className);
lastChildElem.classList.add("socialMedia");
console.log(lastChildElem.className);
console.log(lastChildElem.classList);
let firstLiElem = document.getElementsByTagName("li")[0];
console.log(firstLiElem.classList.contains("red"));

//Attributes and Propeerties
const inputElement = document.getElementById("username");

// Accessing attribute

/* 
console.log(inputElement.getAttribute('value')); // Outputs: "JohnDoe"

// Accessing property
console.log(inputElement.value); // Outputs: "JohnDoe"

// Changing property
inputElement.value = "JaneSmith";
console.log(inputElement.getAttribute('value')); // Still outputs: "JohnDoe"

// Changing attribute
inputElement.setAttribute('value', 'AliceBrown');
console.log(inputElement.value); // Outputs: "AliceBrown" */
let firstList = document.getElementById("one");
firstList.style.color = "red";
console.log(firstList.style.color);
firstList.style.backgroundColor = "yellow";
let secondList = document.getElementById("two");
secondList.style.font = "italic small-caps bold 30px/1.5 arial ";
//it requires a specific order: font-style, font-variant, font-weight, font-size, line-height, and font-family

let h1Element = document.getElementById("title");
h1Element.style.display = "none"; //hides the Fruit title

let divElement = document.getElementById("divID");
divElement.style.border = "2px solid #fc0254";
divElement.style.borderLeft = "5px dashed #000000";

// console.log(window);

// Event listner
function showClockedAlert() {
  alert("button clicked!!");
}
function changeButtonColor() {
  var myButton = document.getElementById("buttonId");
  myButton.style.color = "red";
}

/* Working on the Project Practice***************************************/

// Question 1
console.log(
  " %c JavaScript DOM Manipulation and JavaScript Events: Practice Exercises ",
  "font-weight:bold; font-size: 2em; color: yellow"
);

console.log(
  " %c Question 1",
  "font-size: 1.5em; font-weight: bold; color: yellow"
);
let sample1 = document.getElementById("sample1");
console.log(sample1);
console.log(sample1.textContent);


//Question 2
console.log(
  " %c Question 2:",
  "font-size:1.5em; font-weight:bold; color: yellow"
);

let techCompanies = document.getElementById("techCompanies");
console.log(techCompanies);

let companiesQuery = document.querySelector("#techCompanies");

console.log(companiesQuery);

let companiesCount = document.querySelectorAll("#techCompanies li");
console.log("Number: " +companiesCount.length);
// console.log(companiesCount.length);

let countRedQuery = document.querySelectorAll(".red");
console.log(countRedQuery);
let countRedClass = document.getElementsByClassName("red");
console.log(countRedClass);

// 2.5 Create a new li HTML element with a content of "Facebook" and display it on console
let facebookElem = document.createElement("li");


// 2.6 Give the newly created element a class of "blue" using JavaScript

facebookElem.className = "blue";
// facebookElem.id = "red";

// 2.7 Append the newly created element next to the the "Sony" li element
facebookElem.textContent = "Facebook";
let parentElem = document.getElementById("techCompanies");
parentElem.append(facebookElem);
console.log(parentElem.children);

// 2.8 How many of the tech companies are labeled blue? Find the result using JavaScript and display the result inside the "blueCompanies" div.

let countBluesElem = document.createElement("p");
let countBlues = document.querySelectorAll(".blue");
countBluesElem.textContent =
  "Number of Blue Comapnies is: " + countBlues.length;
console.log(countBlues);

let blueCompanies = document.getElementById("blueCompanies");
blueCompanies.appendChild(countBluesElem);

//Question 3

console.log(
  " %c Question 3:",
  "font-size:1.5em; font-weight:bold; color: yellow"
);
console.log("No console diplay here!");

const yesButton = document.getElementById("yesBackground");

function yesBackgroundColor() {
  document.body.style.backgroundColor = "#99ecff";
}
yesButton.addEventListener("click", yesBackgroundColor);

const noButton = document.getElementById("noBackground");
function removeBackgroundColor() {
  document.body.style.backgroundColor = "";
}

const noButton2 = document.getElementById("noBackground");
function greenBackgroundColor() {
  document.body.style.backgroundColor = "yellow";
}
noButton.addEventListener("click", removeBackgroundColor, greenBackgroundColor);


// QUestion 4
console.log(
  " %c Question 4:",
  "font-size:1.5em; font-weight:bold; color: yellow"
);
const adder = document.getElementById("adder");

  function sumTwoInputs(e) {
  e.preventDefault();

  const firstValue = document.querySelector('input[name="first-value"]');// using css attribute selector
  const firstInput = firstValue.value;

  const secondValue = document.querySelector('input[name="second-value"]');
  const secondInput = secondValue.value;

  // Convert the input values to numbers if not it concatenates the values

  const num1 = parseFloat(firstInput);
  const num2 = parseFloat(secondInput);

  const usernameInput = document.getElementById("username");

  if (isNaN(num1) || isNaN(num2)) {
    usernameInput.value = "Please enter numerical values only";
    usernameInput.style.width = "250px";
    // console.log("Please enter numerical values only");
  } else {
    const sum = num1 + num2;

    usernameInput.value = sum;
    console.log("The sum is: " + sum);
  }
}
adder.addEventListener("submit", sumTwoInputs)
