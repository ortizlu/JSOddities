function closure() {
  const arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

const closureReturn = closure();

console.log(closureReturn[0]());
console.log(closureReturn[1]());
console.log(closureReturn[2]());
