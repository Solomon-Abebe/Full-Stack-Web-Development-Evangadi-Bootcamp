"use strict";

console.log(" Introduction to programming basics - Practice exercise");
console.log();
console.log(
  "Question 1: Find out the answers for these by displaying it on the console. You will need to compare the value on the left of the operator with the value on the right. Please note that the answer for each question below should be either True or False"
);

console.log();

console.log(24 > 3);
console.log(2 < "12");
console.log(0 == 2);
console.log(2.0 === 2);

console.log(2.0 == "2");
console.log(2 < "John");
console.log(2 > "John");
console.log("2" < "2");
console.log("2" < "13");
/*The output for console.log("2" > "12"); is true.

This is because JavaScript compares strings lexicographically, which means it compares them based on the Unicode values of their characters from left to right.

Here's how it works in this case:

Compare the first character of both strings: "2" and "1".
The Unicode value of "2" (50) is greater than the Unicode value of "1" (49).
Since "2" is greater than "1", the comparison returns true without considering any subsequent characters. */
console.log(1 == 1 || 3 == 2 || 3 == 7);
console.log(1 == 1 && 2 == 2 && 3 == 7);
console.log(1 == 1 || (2 == 2 && 3 == 7));
console.log(
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
);
console.log("1" === 1);

console.log();

/* "Question 2: Answer the following questions. Make sure to think about each question and try to solve it in your brain before you see the result on the console!!!" */

console.log(
  "Question 2: Answer the following questions. Make sure to think about each question and try to solve it in your brain before you see the result on the console!!!"
);
console.log("mememe");

let x = 1 == true;
console.log(x);

let z = 10;
let y = z > 5 && z < 15;
console.log(y);

let a = 5;
a += 3;
console.log(a);

let b = 10;
let m = b++ + b-- + b++ + b;

console.log(b);
console.log(m);

console.log(
  ":value of c in Question 5 of section 2 is: " +
    m +
    " b/c b is first assigned to c then increased to 11;"
);
//  c is 10 b/c b is first assigned to c then increased to 11;

let d = 1;
let e = d !== 2;
console.log(e);
console.log();
console.log(5 + 6 + "4" + 9 - 4 - 2);
console.log(7 % 3);
console.log(2 + true + " b/c in js boolean has value of 1 or 0");

console.log();
console.log("Question no 3 write simple script to add two numbers");
console.log();

let f = 1;
let g = 2;
let h = f + g;
console.log(h);

console.log();
console.log(
  "Question no 4 write simple script to concatenate your first and last name"
);
console.log();

let fName = "Solomon";
let fName2 = "Solomon ";
let lName = "Abebe";
let fullName = fName + " " + lName;
console.log(fName2 + lName);

console.log(fullName);

let Full_Name = `Full Name:  ${fName} ${lName}`; //TemplateLitral / BackTick
console.log(Full_Name);

//  console.log("Abe"<63);

/* //bitwise operation 1 & 0 ==0; 0 & 0 ==0, 1 & 1 == 1;
let n=50;
n &=5;
console.log(n);
 */

/* 
let person = {
  name: "John",
  age: 37,
  greet: function () {
    console.log("Hello!");
  },
};
person.greet();

const obj = {
  method: function () {
    console.log("Hi");
  }, // Comma separates the 'method' property from potential subsequent properties
};
obj.method();

var gradeResults = [];
gradeResults = [55, 99, 73]; 
console.log(gradeResults);

var myCar = ["BMW", "Honda", "Ford"];
var elc = ["TV", 99, "phone"]; 
console.log(myCar[2]);
myCar[2] = "Toyota";
console.log(myCar[2]); */

console.log("the shortcut for 'console.log()' is: clg");
