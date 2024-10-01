const { myMultiplier: firstMultiplier } = require("./myFirst");

const runFirstMultiplier = async () => {
  const firstResult = await firstMultiplier(4);
  console.log(`First result (myCollector): ${firstResult}`);
};

const { myMultiplier: secondMultiplier } = require("./mySecond");

const runSecondMultiplier = async () => {
  const secondResult = await secondMultiplier(4);
  console.log(`Second result (myCollector): ${secondResult}`);
};

runFirstMultiplier();
runSecondMultiplier();
/***************************************************** */

const fs = require("fs/promises");

const runMultipliers = async () => {
  await fs.writeFile("results.txt", "", "utf8");

  const result1 = await firstMultiplier(14);
  const content1 = `The value of 14 when passed through the myMultiplier function is (${result1}).\n`;
  await fs.writeFile("results.txt", content1, { flag: "a", encoding: "utf8" });

  const result2 = await secondMultiplier(14);
  const content2 = `The value of 14 when passed through the myMultiplier function is (${result2}).\n`;
  await fs.writeFile("results.txt", content2, { flag: "a", encoding: "utf8" });

  console.log("Result written to results.txt");
};

runMultipliers();
