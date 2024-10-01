const myMultiplier = async (number) => {
  return new Promise((resolve) => {
    let result = number * 3;
    resolve(result);
  });
};

const runMultiplier = async (number) => {
  const result = await myMultiplier(number);
//   console.log(`The returned result is: ${result}`);
};
runMultiplier(4);
export { myMultiplier };
