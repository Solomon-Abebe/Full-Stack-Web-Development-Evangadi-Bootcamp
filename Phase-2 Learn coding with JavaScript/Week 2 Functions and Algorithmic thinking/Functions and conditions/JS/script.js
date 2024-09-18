"use strict";

const getDayActivity = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
      console.log(
        "Start of the work week, Live group discussion! Time to get productive!"
      );
      break;

    case "tuesday":
      console.log("Second day of the week, showcase the weekly project!");
      break;

    case "wednesday":
      console.log(
        "Midweek, watching videos for the next week, keep going productive!"
      );
      break;

    case "thursday":
      console.log(
        "Weekend is coming, live class with Biruk, finalize second part of the weekly videos and class notes!"
      );
      break;

    case "friday":
      console.log(
        "last day of the week, live class with Biruk, Work on practice questions, keep working hard"
      );
      break;

    case "saturday":
      console.log(" Complete checklist, chillout!");
      break;

    case "sunday":
      console.log(
        "The holyday, start next week video, jot down questions for the monday class"
      );
      break;
    default:
      console.log("Please Insert valid day of the week!!!");
  }
};

getDayActivity("THURSDAY"); // change the argument to any day of the week here

console.log("Part-I of Week 2 Practice questions");
/* Question 1
-define function myFirst
- print "Hello" on console inside the function block
-call the function outside the function block
 */

function myFirst() {
  console.log("Hello");
}
myFirst();

/* Question 2
-define a function called mySecond that take an argument(name)
-console.log(name);
-call the function ouside the function block
*/

function mySecond(name) {
  console.log(name);
}
mySecond("Solomon");

/* Question 3
-define a function myThird(parameter)
-call the function mySecond and assign to a variable
-call the myThird function with an argument
*/

function myThird(lastName) {
  let lastName2 = mySecond(lastName);
}
myThird("Abebe");

/* Question 4 Write a function named myFourth that takes an array as a parameter and prints only the first value of the array on the console.

-define function myFourth(arr)
-print on console the first element of the arr[0];
-provide an array variable outside the function block and call the function 
*/

function myFourth(arr) {
  if (arr.length > 0) {
    let firstElement = arr[1][1][0];
    console.log(firstElement);
  } else {
    console.log("Array is Empty");
  }
}

let myArray = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
myFourth(myArray);

// let myArray2 = ["Sol", 5, "Evangadi", 7, 11];
// myFourth(myArray2);

/* Question 5 Write a function named myFifth that takes an array with two numbers in it as a parameter and prints the sum of the two numbers on console.
    - define a function myFifth(arr) that takes arr parameter
    - check edge constraints that length of arr ==2
    - sum the first and the second elements od the array
    - sum = firstElem + secondElem*/

function myFifth(arr) {
  if (arr.length == 2 || Array.isArray(arr)) {
    let sum = arr[0] + arr[1];
    return sum;
  } else {
    return "Provide proper array!";
  }
}
let fifthArray = [100];
console.log(myFifth(fifthArray));

/* Question 6 Write a function that takes an integer minutes 
and converts it to seconds.

-pseudo code:
    - write function name minutesToSeconds
    - intialize a variable seconds to "Invalid value of minutes"
    -check if the argument is valid number
        -if (minutes>0 && typeof minutes === "number"){
        -calculate the second:
        seconds = minutes *60}
      
    -convert the minute to seconds: minuts*60
    -return seconds*/

console.log();
console.log("Question 6");
console.log();

function minutesToSeconds(minutes) {
  let seconds = "Invalid value of minutes";
  if (Number.isInteger(minutes) && minutes >= 0) {
    seconds = minutes * 60;
  }
  return seconds;
}
console.log(minutesToSeconds("minutes"));
console.log(minutesToSeconds(5));
console.log(minutesToSeconds(3));
console.log(minutesToSeconds(2));
console.log(minutesToSeconds(-5));

/* Question 7 Create a function that takes a number as a parameter, increments the number by +1 and
returns the result 
pseudo code:
    -define function incrementbyOne(number) that takes single parameter
    - initialize a variable increment to "invalid value"
        let increment = "invalid value"
    -check if the argument is number
    -assign the increased argument to the global variable
    -return the variable*/
console.log();
console.log("Question 7");
console.log();

function incrementByOne(number) {
  let increment = "invalid value";
  if (typeof number === "number") {
    increment = ++number;
  }
  return increment;
}
console.log(incrementByOne("5"));
console.log(incrementByOne(5));

/* Question 8
Write a function that takes the base and height of a triangle and returns its area.
  - define a function areaOfTriangle that take base and height parameters
  - declare areaTriangle variable
  - validate if base and height are >0 and valid numbers
  - calculate areaTriangle = 0.5 * base * height
  - else areaTriangle = "Invalid value of base or height"
  - return areaTriangle
  - test for valid and invalid values of the parameters
 */
console.log();
console.log("Question 8");
console.log();

function areaOfTriangle(base, height) {
  let areaTriangle;
  if (
    typeof base === "number" &&
    typeof height === "number" &&
    base > 0 &&
    height > 0
  ) {
    areaTriangle = 0.5 * base * height;
  } else {
    areaTriangle = "Invalid value of base or height";
  }
  return areaTriangle;
}
let result1 = areaOfTriangle(5, 6);
console.log(result1);
let result2 = areaOfTriangle("10", 6);
console.log(result2);
let result3 = areaOfTriangle(-5, 6);
console.log(result3);

/* Question 9
● Create a function that returns the total number of legs of all the animals. In this challenge, a
farmer is asking you to tell him how many legs can be counted among all his animals. The
farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
the farmer wants to know the total number of legs and not the total number of animals.

pseudo code:
    -function countTotalLegsOfAnimals(chicken, cows, pigs)
    - validate if the number of animals is > 0 and type of "number"
    - legsOfChicken = 2*chicken
    - legsOfCows = 4 * cows
    - legsOfPigs = 4 * pigs
    - totalLegs = legsOfChicken + legsOfCows + legsOfPigs
    return totalLegs
 */
console.log();
console.log("Question 9");
console.log();

function countTotalLegsOfAnimals(chicken, cows, pigs) {
  let totalLegs;
  if (
    chicken >= 0 &&
    cows >= 0 &&
    pigs >= 0 &&
    typeof chicken === "number" &&
    typeof cows === "number" &&
    typeof pigs === "number"
  ) {
    totalLegs = chicken * 2 + cows * 4 + pigs * 4;
  } else {
    totalLegs = "Insert valid number of animals";
  }
  return totalLegs;
}
console.log("Total legs of animals:");
console.log(countTotalLegsOfAnimals(5, 4, 10));
console.log(countTotalLegsOfAnimals("5", 4, 10));

/* Question 10 (not from edabit.com)
● Create a function that takes an array containing only TWO numbers as a parameter and
returns a value that is 3 times the first element of the array.
  - define a function threeTimesFirstElement that take an arr parameter
      -threeTimesFirstElement(arr)
      -declare a variable threeTimesFirstElem
        - let threeTimesFirstElem;
  - check if the argument is array and arr.length ==2
  - check if the elements of arr are numbers
  - calculate 3 * arr[0];
    - assign to the threeTimesFirstElem
      - threeTimesFirstElem = 3 * arr[0]
      - else threeTimesFirstElem = "Insert a valid argument"
    -return whatever the value of the variable
     - return threeTimesFirstElem
  - test the function for different values
*/
console.log();
console.log("Question 10");
console.log();

function threeTimesFirstElement(arr) {
  let threeTimesFirstElem;
  if (
    Array.isArray(arr) &&
    arr.length == 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    threeTimesFirstElem = 3 * arr[0];
  } else {
    threeTimesFirstElem = "Insert a valid argument and length of array";
  }
  return threeTimesFirstElem;
}
console.log(threeTimesFirstElement([-5, 6, 6]));
console.log(threeTimesFirstElement([6, 6]));
console.log(threeTimesFirstElement(["6", 6]));

/* Questions on conditional statements */

console.log();

console.log("Questions on Conditional statements and - practice exercise");

/* Question 11
● Create a function that returns true when num1 is equal to num2; otherwise return false. 
  - define a function checkEquality that take two parameters
   - checkEquality(num1, num2)
  - return the boolean value of the comparison between the two parameters
   - return num1 === num2
  - test the function with different values
*/
console.log();
console.log("Question 11");
console.log();
function checkEquality(num1, num2) {
  return num1 === num2;
}

console.log(checkEquality(4, 8));
console.log(checkEquality(2, 2));
console.log(checkEquality(2, "2"));
console.log(checkEquality(true, 1));
/* Question 12
● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
return false.

  - define a function checkDivisiblityBy100 that takes parameter num
    -checkDivisiblityBy100(num)
  - validate if the argument is type of numebr
  - return the boolean value of the comparison of num%100 to 0
    - return num%100 ==0
  - test the function
 */
console.log();
console.log("Question 12");
console.log();

function checkDivisiblityBy100(num) {
  if (Number.isInteger(num)) {
    return num % 100 === 0;
  } else {
    return "Insert valid integer value";
  }
}
console.log(checkDivisiblityBy100("10"));
console.log(checkDivisiblityBy100(10));
console.log(checkDivisiblityBy100(1000));
console.log(checkDivisiblityBy100(100));
console.log(checkDivisiblityBy100(100.5));
/* Question 13
● Create a function that takes a number as an argument and returns "even" for even numbers
and "odd" for odd numbers.

  - create a function checkEvenOrOdd that take a number parameter
      - checkEvenOrOdd(num)
    - validate the argument for type of number
      - if fails validation return "Insert number value"
    - use ternary operator to return the value of modulo oparator
      - return num%2 ===0?"even" : "odd"
  
 */
console.log();
console.log("Question 13");
console.log();

function checkEvenOrOdd(num) {
  if (typeof num !== "number") return "Insert number value!";
  return num % 2 === 0 ? "even" : "odd";
}
console.log(checkEvenOrOdd(5));
console.log(checkEvenOrOdd(6));
console.log(checkEvenOrOdd("5"));

/* Question 14
● Create a function that returns
○ “Invalid score” if score is above 100 or score is a negative number
○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
○ “Grade C” for any score below 79

  - define a function readScore that take score paramater
    -readScore(score)
  - validate score for type number and not >100 or <0
   - return "Invalid Score" if it fails validation
      - return "Invalid Score"
  - return A for score >= 90
  - return B for score >=80
  - return C for score any other value
  
 */
console.log();
console.log("Question 14");
console.log();

function readScore(score) {
  if (typeof score !== "number" || score > 100 || score < 0) {
    return "Invalid Score!";
  } else if (score >= 90) {
    return "Grade A";
  } else if (score >= 80) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}
console.log(readScore(101));
console.log(readScore(90));
console.log(readScore(81));
console.log(readScore(79));
console.log(readScore("79"));
console.log(readScore(-10));

// Additional Questions from Edabbit by Kebe
/* Create a function which returns the number of true values there are in an array. 

  - define function countTrue that take array parameter
      - countTrue(arr)
    - intialize a variable to store the count of true values to 0
      - let trueValue = 0
    - create a loop for iteration of each elements in the array
      - for(i = 0; i<arr.length; i++)
     -comapre each element of array with boolean value true
       - if element ===true increase the variable trueValue by one
      - return trueValue
    */

console.log();
console.log("Question kebe");
console.log();

function countTrue(arr) {
  let trueValue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) trueValue++;
  }
  return trueValue;
}
let trueArr = [true, false, false, true, false];
console.log(countTrue(trueArr));
