function filterEach(arr, cb) {
  let returnedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      returnedArr.push(arr[i]);
    }
  }
  return returnedArr;
}

//filter all of the 3's
let filterMe = [1, 2, 3, 5, 2, 3, 7, 3, 5, 8, 9, 3, 10, 3];

let filtered = filterEach(filterMe, number => number > 3);
console.log(filtered);
