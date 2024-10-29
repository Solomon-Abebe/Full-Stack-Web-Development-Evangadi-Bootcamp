function random(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

const randNum = random(10, 100);
console.log(randNum);
module.exports = { random };
