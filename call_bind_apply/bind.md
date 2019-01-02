# Call

```js
let panda = {
  whoAmI: function(patterns) {
    console.log('I am a panda. I have ' + patterns);
  }
};

function impostorPanda() {
  this.whoAmI('black and yellow spots');
}

//bind returns a function. Since the function is not stored in a variable, the function is immediately invoked with the parentheses. The impostor panda has succesfully imitated the real panda!!
impostorPanda.bind(panda)();
```

So here we have an example of call. We have an object called `panda`, and a function called `impostorPanda()`. Since functions are really objects on the low, we can use bind to change "this" to 'function borrow'. What you see above is us referencing the impostorPanda function but changing the identity of "this" to refer to panda. So when we call

`this.whoAmI('black and yellow spots');`

We know that the "this" now refers to panda, which is why we can use the panda's function `whoAmI` inside of the impostorPanda
