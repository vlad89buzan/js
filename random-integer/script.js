function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
}
console.log(randomInteger(1,100))
