So today we're looking at the famous IIFE example where we store functions inside an array, and then invoke each function to show us the result. The results may surprise you! (clickbait)

We're first taking a look at a [closure example with var](closureWithVar.js) which you can also look at below

```js
function closure() {
  let arr = [];

  for (var i = 0; i < 3; i++) {
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
```

So what is going on in the above code? Well first we set up an array, and then create for loop and for each iteration, we push a new function that console.logs(i). Seems simple enough. So the first iteration would appear to store a function that console.logs(0) and the second `1` and so on. But is that what actually happens?

The result of these 3 logs is actually

```js
console.log(closureReturn[0]()); //3
console.log(closureReturn[1]()); //3
console.log(closureReturn[2]()); //3
```

But why?

Let's try to understand where the closure comes in. First, we run our closure function here.

`const closureReturn = closure();`

```js
for (var i = 0; i < 3; i++) {
  arr.push(function() {
    console.log(i); //how does the function know what i is, even after the array gets returned?
  });
}
```

The part that is considered the closure is above. After the array is returned, and the three functions inside the array are invoked, how does the function know what to console.log?
