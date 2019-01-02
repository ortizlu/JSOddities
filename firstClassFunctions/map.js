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
