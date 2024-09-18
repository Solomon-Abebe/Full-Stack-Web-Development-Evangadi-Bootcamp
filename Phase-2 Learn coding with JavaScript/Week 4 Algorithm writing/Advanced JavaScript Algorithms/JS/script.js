/*************************** */
//Word from the crowd
/*************************** */
console.log("HIDDEN WORD");
function hiddenWord(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char === char.toLowerCase()) {
      word = word + char;
    }
  }
  return word;
}
// let stringCollection = "UcFGHJaGGWQtMYZT";
console.log(hiddenWord("UcFGHJaGGWQtMYZT"));
console.log(hiddenWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(hiddenWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

/*************************** */
// Nested Array
/*************************** */
console.log();
console.log("NESTED ARRAY");
console.log();
function isNestedArray(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }

  let min1 = arr1[0];
  let max1 = arr1[0];

  let min2 = arr2[0];
  let max2 = arr2[0];

  //find min and max of arr1
  // O(n-1) time complexity
  for (let i = 1; i < arr1.length; i++) {
    if (min1 > arr1[i]) {
      min1 = arr1[i];
    }
    if (max1 < arr1[i]) {
      max1 = arr1[i];
    }
  }
  //O(n-1) time complexity

  for (let i = 1; i < arr2.length; i++) {
    if (min2 > arr2[i]) {
      min2 = arr2[i];
    }
    if (max2 < arr2[i]) {
      max2 = arr2[i];
    }
  }

  return min1 > min2 && max1 < max2;

  // total time complexity O(n-1)+O(n-1)=> O(n)
  // Space complexity O(1)-> constant
}

console.log(isNestedArray([1, 2, 3, 4], [0, 6]));
console.log(isNestedArray([3, 1], [4, 0]));
console.log(isNestedArray([9, 9, 8], [8, 9]));
console.log(isNestedArray([1, 2, 3, 4], [2, 3]));

console.log();
console.log("MAGIC ARRAY");
console.log();

function isMagicArray(arr) {
  let sum = 0;

  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let j = 0; j < arr.length; j++) {
    if (isPrime(arr[j])) {
      sum += arr[j];
    }
  }
  return sum === arr[0] ? 1 : 0;
}

console.log(isMagicArray([21, 3, 7, 9, 11, 4, 6]));
console.log(isMagicArray([8, 5, -5, 5, 3]));

/*************************** */
// Point of Equilibrium
/* Consider an array A with n of positive integers. An integer idx is called a POE (point of equilibrium) of A, if A[0] + A[1] + … + A[idx – 1] is equal to A[idx + 1] + A[idx + 2] + … + A[n – 1]. Write a function to return POE of an array, if it exists and -1 otherwise. */
/*************************** */

/* define function pointOfEquilibrium
left pointer start from 0
rigth pointer start from right most index
left sum = first element
right sum = right most element
while leftsum<rightsum
leftsum +=arr[left pointer]
idx = leftpointer +1;
leftpointer ++
while rightsum<leftsum
rightsum += arr[rightpointer]

idx = right pointer-1
right pointer--

if leftsum==rightsum
return idx

*/
console.log();
console.log("POINT OF EQUILIBRIUM");
console.log();
function pointOfEquilibrium(arr) {
  let n = arr.length;
  let leftSum = arr[0];
  let rightSum = arr[n - 1];
  let leftPointer = 0;
  let rightPointer = n - 1;
  let idx;
  if (arr.length < 3) return -1;
  for (let i = 1; i < n - 2; i++) {
    if (leftSum < rightSum) {
      leftPointer++;
      leftSum += arr[leftPointer];

      idx = leftPointer + 1;
    } else {
      rightPointer--;
      rightSum += arr[rightPointer];

      idx = rightPointer - 1;
    }
  }
  return rightSum === leftSum ? idx : -1;
}

console.log(pointOfEquilibrium([1, 8, 3, 7, 10, 2]));
// console.log(pointOfEquilibrium());
console.log(pointOfEquilibrium([1, 5, 3, 1, 1, 1, 1, 1, 1]));
console.log(pointOfEquilibrium([2, 1, 1, 1, 2, 1, 7]));
console.log(pointOfEquilibrium([1, 2, 3]));
console.log(pointOfEquilibrium([3, 4, 5, 10]));
console.log(pointOfEquilibrium([1, 2, 10, 3, 4]));

// Reverse ARRAY
console.log();
console.log("REVERSE AN ARRAY");
console.log();

function reverseArray(arr){
  let left = 0;
  let right = arr.length-1;
  while(left<right){
    [arr[left], arr[right]] = [arr[right], arr[left]]; //Concise way of swappin of two elemnts of an array in js
    left++;
    right--;
  }
  return arr;
}
console.log(reverseArray([1,2,3,4,5,6]));

console.log();
console.log("SORTING AN ARRAY");
console.log();

//bubble sort
console.log("Sorting");
function bubbleSort(arr){
    let j =true;
    while(j){
        j = false;
        for(let i = 0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                j = true;
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] =temp;
            }
            console.log("tell me the loop number: While LOOP!");
        }
    }
    return arr;
}
console.log(bubbleSort([5, 2, 6, 11, 9, 10]));


function bubbleSort2(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length-i-1; j++){

            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        console.log("tell me the number of loops: For loop!");
    }
    return arr;
}
console.log(bubbleSort2([5, 2, 6, 11, 9, 10]));

/* Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4] */

console.log();
console.log("GET ONLY EVENS");
console.log();

function getOnlyEvens(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(getOnlyEvens([1, 2, 3, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));

/* Question 2
● Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
 */
console.log();
console.log("REVERSE DIGIT AND COMPARE");
console.log();

function reverseCompare(num) {
  if (Math.abs(num) < 10 || Math.abs(num) > 99) {
    console.log("Not Ok!");
    return;
  }

  let isNegative = num < 0;
  let absNum = Math.abs(num);

  let unitsDigit = absNum % 10;
  let tensDigit = (absNum - unitsDigit) / 10;

  let reversedNumber = unitsDigit * 10 + tensDigit;
  if (isNegative) {
    reversedNumber = -reversedNumber;
  }
  if (num > reversedNumber) {
    console.log("Ok!");
  } else {
    console.log("Not Ok!");
  }
}

reverseCompare(72);    
reverseCompare(-23);   
reverseCompare(-72);  
reverseCompare(23);  



/* function reverseCompare(num) {
  if (num < 10 || num > 99) {
    console.log("Not Ok!");
    return;
  }
  let unitsDigit = num % 10;
  let tensDigit = (num - unitsDigit) / 10;

  let reversedNumber = unitsDigit * 10 + tensDigit;

  if (num > reversedNumber) {
    console.log("Ok!");
  } else {
    console.log("Not Ok!");
  }
}
reverseCompare(72);
reverseCompare(-23);
 */
/* 
Question 3
● Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1

 */
console.log();
console.log("RETURN FACTORIAL");
console.log();

function returnFactorial1(n) {
    if (n === 0) return 1;
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        console.log("tell me the number of loops: Factorial FOR LOOP!");
    }
    return factorial;
}
console.log(returnFactorial1(5)); 
// console.log(returnFactorial(6));
// console.log(returnFactorial(0)); 

// Recursion
function returnFactorial(num) {
    
  if (num === 0) return 1;
console.log("tell me the number of loops:Factorial RECURSION");
console.log(num);
  return num * returnFactorial(num - 1);
  
}
console.log(returnFactorial(5));
// console.log(returnFactorial(6));
// console.log(returnFactorial(0));


/* 

*/
console.log();
console.log("MERRA ARRAY");
console.log();

function checkMeera(arr) {
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === elem * 2) {
                found = true;
                break;
            }
        }
        if (found) {
            console.log("I am NOT a Meera array");
            return;
        }
    }
    console.log("I am a Meera array");
}


checkMeera([10, 4, 0, 5]);    
checkMeera([7, 4, 9]);        
checkMeera([1, -6, 4, -3]); 

/* Question 5 (Dual array)
● Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0 */
// isDual

/* // treat count as object

function isDual(arr) {
    let count = {}; // Step 1: Initialize an empty object to store counts.

    // Step 2: Check if the array length is odd; if yes, return 0 as it can't be a dual array.
    if (arr.length % 2 !== 0) {
        return 0;
    }

    // Step 3: Iterate over the array to count occurrences of each element.
    for (let i = 0; i < arr.length; i++) {
        var item = arr[i]; // Extract the current item in the array.

        // Step 4: Check if the item exists in the count object.
        if (count[item] == undefined) {
            // Step 4a: If the item is not found, set its count to 1.
            count[item] = 1;
        } else {
            // Step 4b: If the item is already in the count object, increment its count.
            count[item]++;
        }
    }

    // Step 5: Iterate over the count object to check if each element occurs exactly twice.
    for (let key in count) {
        if (count[key] !== 2) {
            // Step 6: If any element doesn't occur exactly twice, return 0.
            return 0;
        }
    }

    // Step 7: If all elements occur exactly twice, return 1.
    return 1;
}
*/

console.log();
console.log("DUAL ARRAY ARRAY");
console.log();

function isDual(arr) {
    let n = arr.length;
    if (n % 2 !== 0) return 0;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count !== 2) {
            return 0; 
        }
    }
    return 1; 
}
console.log(isDual([1, 2, 1, 3, 3, 2])); 
console.log(isDual([2, 5, 2, 5, 5]));   
console.log(isDual([3, 1, 1, 2, 2]));   
console.log(isDual([4, 4, 6, 6, 8, 8])); 

console.log();
console.log("DIGITAL CLOCK");
console.log();

function digitalClock(seconds) {

let day = Math.floor(seconds / 86400);
  let hours = (Math.floor(seconds / 3600));
  hours = hours % 24; //24 hours format
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  secs = secs < 10 ? '0' + secs : secs;

  return day + " day(s) " + hours + ":" + minutes + ":" + secs;

  /* 
  let hours = 0;
  while (seconds >= 3600) {
    hours++;
    seconds -= 3600;
  }
  hours = hours % 24; 

  let minutes = 0;
  while (seconds >= 60) {
    minutes++;
    seconds -= 60;
  }

 
  let secs = seconds; */
  /* // Calculate hours
  let hours = seconds / 3600;
  
  if (hours >= 1) {
    hours = (hours - (hours % 1));
  } else {
    hours = 0;
  }
  seconds -= hours * 3600;

  // Calculate minutes
  let minutes = seconds / 60;

  if (minutes >= 1) {
    minutes = minutes - (minutes % 1);
  } else {
    minutes = 0;
  }
  seconds -= minutes * 60;

  // Remaining seconds
  let secs = seconds;

  // Formatting to always show two digits
  let hoursStr = hours < 10 ? "0" + hours : "" + hours;
  let minutesStr = minutes < 10 ? "0" + minutes : "" + minutes;
  let secsStr = secs < 10 ? "0" + secs : "" + secs;

  // Returning the time as a string using concatenation
  return hoursStr + ":" + minutesStr + ":" + secsStr; */
}

console.log(digitalClock(5025));   // "01:23:45"
console.log(digitalClock(61201));  // "17:00:01"
console.log(digitalClock(87000));  // "00:10:00"
console.log(digitalClock(86400));



/* map:
The callback function should return a transformed value for each element.
filter:
The callback function should return a boolean value (true or false) to indicate whether the element should be included in the new array.
map: Typically used when you want to modify or transform each element.
filter: Typically used when you want to include or exclude elements based on a condition. */