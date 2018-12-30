function closure() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }

  return arr;
}

const closureReturn = closure();

console.log(closureReturn[0]());
console.log(closureReturn[1]());
console.log(closureReturn[2]());
