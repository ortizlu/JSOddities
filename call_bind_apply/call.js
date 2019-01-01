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
