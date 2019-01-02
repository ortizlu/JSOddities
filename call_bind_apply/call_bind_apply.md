# Call, Bind, and Apply

We will take a look at Call first in this example below

```js
let obj1 = {
  name: 'obj1',
  doSomething: function(statement, excitement) {
    console.log('name: ', this.name);
    console.log('work is being performed ' + statement + excitement);
  }
};

let obj2 = {
  name: 'obj2'
};

// obj2.doSomethingMore();
//without the call, we wouldn't be able to do this. This is borrowing the doSomething function from the first object and CALLING it (hence call) but setting the new "this" to refer to obj 1
obj1.doSomething.call(
  obj2,
  'by obj 2 even though I do not own doSomething()',
  '... YAY!'
);
```

So `obj1` has the method `doSomething()` that `obj2` wants to have access to. So what we do is reference the function that we need, in this case `obj1.doSomething` and then use call to change the reference of "this" to be obj2. The first parameter is what we want to change "this" to, and any other parameters are what we pass in to `doSomething()`

So our final output becomes

```js
//name:  obj2
//work is being performed by obj 2 even though I do not own doSomething()... YAY!
```
