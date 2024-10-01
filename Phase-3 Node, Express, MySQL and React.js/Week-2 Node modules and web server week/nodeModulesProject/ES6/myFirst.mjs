console.log("My First module");

/******************************************************** */
const myMultiplier = async(number)=>{
  return new Promise((resolve) =>{
    let result = number * 2;
    resolve(result);
  });
};
const runMultiplier = async (number) => {
  const result = await myMultiplier(number); 
};
runMultiplier(4);
export {myMultiplier};

/************************************************************ */
