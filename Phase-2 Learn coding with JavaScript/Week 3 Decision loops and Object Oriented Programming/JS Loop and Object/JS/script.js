"use strict";

/* Question 1

Write a function that prints the first 10 integers on the console starting from the number 1 using
the JavaScript for loop.
    - define function print10FirstIntegers
        - define array variable to store the integers
            -let integerArray = []
        - for i = 0 to 10
         - print i or push to the array
         -  return the array or console.log every i
*/
console.log();
console.log("Question 1");
console.log();

function printTheFirst10Integers() {
  let x = [];
  for (let i = 1; i <= 10; i++) {
    // console.log(i);
    x.push(i);
  }
  return x;
}
let integers = printTheFirst10Integers();
console.log(integers);

/* Question 2

 Write a function that takes a single number as an argument and prints the next 5 numbers in the
console. Note: each output should be displayed on a new line.
○ Test case: If you give 7 to the function, output should look like this:
8
9
10
11
12
The most common built-in JavaScript objects (ex: String, Array, Math)
Therefore we can store the numbers in string as a single object separated by newline character
function printNextFiveNumbers(num) {
    let nextNum = num;
    let result = '';
    for (let i = 1; i <= 5; i++) {
        nextNum++;
        result += nextNum + '\n'; // newline character '\n'
    }
    return result;
}

    - define a function printNextFiveNumbers that takes num parameter
     - printNextFiveNumbers(num)
      - declar a variable that stor each next number
        - let nextNum = num;
     for i = 1 to 5 
          nextNum++;
        -console.log(nextNum)

*/
console.log();
console.log("Question 2");
console.log();

function printNextFiveNumbers(num) {
  let nextNum = num;
  for (let i = 1; i <= 5; i++) {
    nextNum++;
    console.log(nextNum);
  }
}
printNextFiveNumbers(7);

/* 
Question 3
Write a function that takes a single number and prints the sum of the next 10 numbers after the
given number.
○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
11+ 12+ 13+ 14+ 15+ 16+ 17 = 125) 


    - define a function sumOfNextTenNumbers that take a num parameter
        - sumOfNextTenNumbers(num)
    -initialize a variable sum to 0 to store the sum of the next 10 numbers
        -let sum=0
    for i = 1 to ten sum = sum + nextNumber
    return sum

*/
console.log();
console.log("Question 3");
console.log();

function sumOfNextTenNumbers(num) {
  let nextNumber = num;
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    nextNumber++;
    sum += nextNumber;
  }
  return sum;
}
console.log(sumOfNextTenNumbers(7));

/* Question 4
● Write a function that takes an array as an argument and prints every element of the array on the
console.
○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
1
Hello
8
44

    - define a function printArrayElemnts(arr)
    let n = arr.length;
    for i = 0 to n print arr[i];


    function printArrayElements(arr){
    let n = arr.length;
  
    for(let i = 0; i<n; i++){
        console.log(arr[i]);   
    }
}
console.log(printArrayElements([1, "Hello", 8, 44]));

*/
console.log();
console.log("Question 4");
console.log();

function printArrayElements(arr) {
  let n = arr.length;
  let elem = "";
  for (let i = 0; i < n; i++) {
    elem += arr[i] + "\n";
  }
  return elem;
}
console.log(printArrayElements([1, "Hello", 8, 44]));

/* Question 5
● Write a function that takes an array as an argument and prints the total number of elements
found in the array. Hint: use a property of the Array object to solve this question.
○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
○ Test case 2: Given the array a = ["world", 13], output should be: 2
 */
console.log();
console.log("Question 5");
console.log();

function printNumberOfElements(arr) {
  let numberOfElements = arr.length;
  return numberOfElements;
}
let arr1 = [1, "Hello", 8, 44];
let arr2 = ["world", 13];
console.log(printNumberOfElements(arr1));
console.log(printNumberOfElements(arr2));

/* Question 6
● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
all the numbers in the array.
○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
3 + 0
 */

console.log();
console.log("Question 6");
console.log();

function sumOfElementsInArray(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (typeof arr[i] !== "number") {
      return " The array has non-numeric value";
    }
    sum += arr[i];
  }
  return sum;
}
let array0 = [5, 6, 99, 8, 76, 4, 68, 44];
let array1 = ["5", 6, 99, 8, 76, 4, 68, 44];
let array2 = [3, 0];

console.log(sumOfElementsInArray(array0));
console.log(sumOfElementsInArray(array1));
console.log(sumOfElementsInArray(array2));

/* 
Question 7
● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
odd numbers of the array from the total sum of all even numbers and logs the result in the
console.
○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
should be: 102
■ Sum of odd numbers: 5 + 99 = 104
■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
■ Difference between total even and total odd numbers: 206 - 104 = 102 
    

- define a function differenceBetweenEvenAndOddSum(arr)
        let evenSum = 0;
        let oddSum =0;
        for int i = 0 to arr.length
            - check if arr[i] is even 
                -arr[i]%2 ==0
                    -evenSum +=arr[i];
                else 
                    - oddSum += arr[i];
                return evenSum - oddSum;

*/
console.log();
console.log("Question 7");
console.log();

function differenceBetweenEvenAndOddSum(arr) {
  let n = arr.length;
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < n; i++) {
    if (typeof arr[i] !== "number") {
      return "Array contains non-numeric value";
    }
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return evenSum - oddSum;
}
let evenOdd = [5, 6, 99, 8, 76, 4, 68, 44];
console.log(differenceBetweenEvenAndOddSum(evenOdd));

/* Question 8
● Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)
○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
should be:
5
99
76
68
○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
be:
11
3
car
 */

console.log();
console.log("Question 8");
console.log();

function printEvenIndexElements(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i += 2) console.log(arr[i]);
}

printEvenIndexElements([5, 6, 99, 8, 76, 4, 68, 44]);
console.log();
printEvenIndexElements([11, "Sam", 3, 7, "car"]);
/* 

Questions on built in JavaScript methods
***********************************
Questions 9 and 10 are dependent on the sampleArray provided below:
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
*/

/* Question 9
Write a function that takes the sampleArray as a parameter, removes the last element from the array,
adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method */
console.log();
console.log("Question 9");
console.log();

function removeAddElement(arr) {
  arr.pop();
  arr.push(32);
  return arr;
}
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
console.log(removeAddElement(sampleArray));

/* Question 10
● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
You should use this sorting syntax - sort(function(a, b){return a-b});
 */
/* // Using an arrow function for comparison

function sortArray(arr) {
    let sortedArr = arr.sort((a, b) => a - b); 
    return sortedArr;
}

let sampleArray2 = [5, 6, 99, 8, 76, 4, 68, 44];
console.log(sortArray(sampleArray2)); */

console.log();
console.log("Question 10");
console.log();

function sortArray(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}
let sampleArray2 = [5, 6, 99, 8, 76, 4, 68, 44];
console.log(sortArray(sampleArray2));

/* Questions on JavaScript objects
****************************
The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.

let evangadiClass = {
lengthOfCourse: "1 Month",
website: "https://www.evangadi.com/",
isChallenging: false,
topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
students: [
{
name: "Abebe",
age: 34,
sex: "M"
},
{
name: "Kebede",
age: 44,
sex: "M"
},
{
name: "Almaz",
age: 27,
sex: "F"
},
{
name: "Challa",
age: 22,
sex: "M"
},
{
name: "Chaltu",
age: 19,
sex: "F"
}
]
}

*/

/* Question 11
● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
○ // Use the dot notation "." to call the property you want to change
 */
console.log();
console.log("Question 11");
console.log();

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};

evangadiClass.lengthOfCourse = "5 Months";

console.log(evangadiClass.lengthOfCourse);

/* Question 12
● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console */

console.log();
console.log("Question 12");
console.log();

evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass.topicsCovered);

/* Question 13
● Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console */

/*
let students = evangadiClass.students; // Extract the students array
    let totalAge = 0;
    
    for (let i = 0; i < students.length; i++) {
        totalAge += students[i].age; // Sum the ages of all students
    }
    
    let averageAge = totalAge / students.length; // Calculate the average age
    console.log("The average age of the class is: " + averageAge);
}

    - define function averageAgeOfClass(evangadiClass) that take parameter of evangadiClass object
        - extract student array from the object evangadiClass
            - assign to a variable classStudents
                - classStudents = evangadiClass.students
            - assign length of the array to n
                - n = classStudents.length
            - initialize totalAge to 0
                - totalAge = 0
            - for i = 0 to n 
                - totalAge = totalAge + age
            - return totalAge/n

*/
console.log();
console.log("Question 13");
console.log();

function averageAgeOfClass(evangadiClass) {
  let classStudents = evangadiClass.students;
  let n = classStudents.length;
  let totalAge = 0;
  for (let i = 0; i < n; i++) {
    totalAge += classStudents[i].age;
  }
  return totalAge / n;
}
console.log(averageAgeOfClass(evangadiClass));

/* Question 14
● Write a function that takes the "evangadiClass" object as an argument and calculates the
percentage of male students in the class. Print the result on the console

define function maleStudent(evangadiClass)
    - extract students array and assign to studenstArray
      studentsArray = evangadiClass.students
        - n = studentsArray.length
        - eclare a variable maleCounter
        - maleCounter = 0
        - for i = 0 to n 
         if sex = "M"
         maleCounter++
        - return maleCounter/n *100

*/
console.log();
console.log("Question 14");
console.log();

function maleStudents(evangadiClass) {
  let studentsArray = evangadiClass.students;
  let n = studentsArray.length;
  let maleCounter = 0;
  for (let i = 0; i < n; i++) {
    if (studentsArray[i].sex === "M") {
      maleCounter++;
    }
  }
  return (maleCounter / n) * 100;
}
console.log("Ratio of male students is: " + maleStudents(evangadiClass) + "%");

/* Puzzles
******* 
Question 15: Test the divisors of three
● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
numbers (on the console) between low and high, and for each of these numbers print
whether or not the number is divisible by 3. If the number is divisible by 3, print the word
"div3" directly after the number.

    define function that takes two numbers low and high
        - divisibleByThree(low, high)
        - print all numbers between low and high
        - nextNumber++;
        - print each next number
        - check if next number is divisible by 3
        return (nextNumber +" div3")

*/

console.log();
console.log("**** Puzzles ****");
console.log("Question 15");
console.log();

function divisibleByThree(low, high) {
  if (typeof low !== "number" || typeof high !== "number") {
    console.log("Insert valid numeric value");
    return;
  }
  // let nextNumber = low;
  for (let i = low; i < high; i++) {
    // nextNumber++;
    console.log(i);
    
    if (i % 3 === 0) {
      console.log(i + ": div3");
      // console.log(`$[i] div3`);
    }
  }
}
divisibleByThree("3", 11);
divisibleByThree(3, 11);

/* Question 16: The famous coding interview question (FizzBuzz)
● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
numbers which are multiples of both three and five print "FizzBuzz".

    - define function fizzBuzz(num) that take num parameter
     - declare empty array container = []
      - for i = 1 to num 
        - if (i%3 ==0 && i%5==0)
          -container.push("fizzbuzz")
        - if(i%3==0)
         container.push("fizz")
        - if(i%5==0)
         container.push("buzz")
        - else
          container.push(i)
*/
console.log();
console.log("Question 16");
console.log();

function fizzBuzz(num) {
  let container = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      container.push("fizzbuzz");
    } else if (i % 3 === 0) {
      container.push("fizz");
    } else if (i % 5 === 0) {
      container.push("buzz");
    } else {
      container.push(i);
    }
  }
  return container;
}
console.log(fizzBuzz(15));
console.log();
console.log(fizzBuzz(100));
/* Question 19: Evens number
● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
integer argument is an Evens number. The function prints 0 otherwise. 

    - define a function isEvens(num)
        - let n= num
        - 
        - while(n!==0)
            - let digit = n%10
            - update the number n in every iteration
                - n = (n-digit)/10;
            if(digit%2!==0)
            return 0;

            otherwise 

            return 1
*/

console.log();
console.log("Question 17");
console.log();

function isEvens(num) {
  // let n = num;
  while (num !== 0) {
    let digit = num % 10;
    if (digit % 2 !== 0) {
      return 0;
    }
    num = (num - digit) / 10;
  }
  return 1;
}
console.log(isEvens(2426));
console.log();
console.log(isEvens(3224));

// for/in
// let person = { name: "John", age: 30, city: "New York" };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

//  for/of
// let colors = ["red", "green", "blue"];

// for (let color of colors) {
//   console.log(color);
// }
// let name = "John";

// for (let char of name) {
//   console.log(char);
// }
