// const firstMultiplier = import { myMultiplier } from "./myFirst.mjs" ;
// const secondMultiplier = import { myMultiplier } from "./mySecond.mjs" ;

// const firstResult =  firstMultiplier.myMultiplier(4);
// console.log(firstResult);
// const secondResult =  secondMultiplier.myMultiplier(4);
// console.log(secondResult);

// Dynamically import the two modules
// const firstMultiplier = await import("./myFirst.mjs");
// const secondMultiplier = await import("./mySecond.mjs");

// Call the myMultiplier function from both modules

// const firstResult = await firstMultiplier.myMultiplier(10);
// console.log(`First result: ${firstResult}`);

// const secondResult = await secondMultiplier.myMultiplier(10);
// console.log(`Second result: ${secondResult}`);

//Import specific function from a module
const { myMultiplier: firstMultiplier } = await import("./myFirst.mjs");
const firstResult = await firstMultiplier(4);
console.log(`First result: ${firstResult}`);

const { myMultiplier: secondMultiplier } = await import("./mySecond.mjs");
const secondResult = await secondMultiplier(4);
console.log(`Second result: ${secondResult}`);

//
// import fs from "fs/promises";

// import { writeFile } from "fs/promises";

/******************************************************************* */
// Question 4
// calling firstMultiplier
import fs from "fs/promises";

await fs.writeFile("results.txt", "", "utf8");
const result1 = await firstMultiplier(14);
const content1 = `The value of 14 when passed through the myMultiplier function is (${result1}).\n`;
await fs.writeFile("results.txt", content1, { flag: "a", encoding: "utf8" }); //"a" is for append mode
// calling secondMultiplier
const result2 = await secondMultiplier(14);
const content2 = `The value of 14 when passed through the myMultiplier function is (${result2}).\n`;
await fs.writeFile("results.txt", content2, { flag: "a", encoding: "utf8" });
console.log("Result written to results.txt");
/**************************************************************************************** */
// using try-catch

/******************************************** */
