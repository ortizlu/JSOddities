// function mapEach(arr, cb) {
//   let returnedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     returnedArr.push(cb(arr[i]));
//   }
//   return returnedArr;
// }

// let arr = [1, 2, 3];

// console.log(mapEach(arr, item => item > 2));

// //========================================================================

// let checkPastLimit = function(limiter, item) {
//   return item > limiter;
// };

// //pass in limiter and it spits back a function that already has bind set

// let defaultLimit = function(limiter) {
//   return function(limiter, item) {
//     return item > limiter;
//   }.bind(this, limiter);
// };

// //used bind to create a copy of a function with a default parameter. In this case, create a copy of checkPastLimit and set the default value to be 1. So our mapEach function checks whether each number is greater than 1
// console.log(mapEach(arr, defaultLimit(0)));
