function mapEach(arr, cb) {
  let returnedArr = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArr.push(cb(arr[i]));
  }
  return returnedArr;
}

let arr = [1, 2, 3];

console.log(mapEach(arr, item => item > 2));

//========================================================================

let checkPastLimit = function(limiter, item) {
  return item > limiter;
};

//used bind to set a default parameter. In this case, we set the limiter to be 1. So our mapEach function checks whether each number is greater than 1
console.log(mapEach(arr, checkPastLimit.bind(this, 1)));
