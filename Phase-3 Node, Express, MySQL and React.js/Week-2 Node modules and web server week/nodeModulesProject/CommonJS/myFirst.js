console.log("My First module");
const myMultiplier = async (number) => {
  return new Promise((resolve) => {
    let result = number * 2;
    resolve(result);
  });
};

const runMultiplier = async (number) => {
  const result = await myMultiplier(number);
  console.log(`The returned result is: ${result}`);
};

module.exports = { myMultiplier };
runMultiplier(4);
