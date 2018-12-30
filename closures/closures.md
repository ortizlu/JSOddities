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

A closure is a function that has access to its outer function's variables. Even after a function `closure()` is returned, the functions that were created and stored into `arr` have access to the variables created in `closure()`. The only variables in `closure()` is `arr` and `i` which is incremented every time.

```js
for (var i = 0; i < 3; i++) {
  arr.push(function() {
    console.log(i); //how does the function know what i is, even after the array gets returned?
  });
}
```

When the closure() function is returned, the execution context is popped off the function stack, BUT our functions still have access to those two variables. Unfortunately, at the end of the loop `i = 3` and so that's the only number that the 3 functions have access to. That is why all three functions print out `3`

What are some ways we can still use closures and print out 0, 1, and 2? There are two ways.

We can first just use the keyword `let` for i instead of `var`. Since `let` is block-scoped, its like a new `i` is created for every iteration in the for loop. And so when we console.log the three functions, we get the output `0`, `1`, and `2`
