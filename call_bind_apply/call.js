let obj1 = {
  doSomething: function(statement) {
    console.log('work is being performed ' + statement);
  }
};

let obj2 = {
  //an arrow function inside an object doesn't create a new functional context, so any "this" inside an arrow function first points to the global object
  domeSomethingElse: () => {
    console.log(this);
  },
  //a regular function expression will point "this" to the object. In this case obj2
  doSomethingMore: function() {
    this.doSomething('by obj2 even though I do not own doSomething()');
  }
};

//without the call, we wouldn't be able to do this. This is borrowing the doSomething function from the first object and CALLING it (hence call) but setting the new "this" to refer to obj 1
obj2.doSomethingMore.call(obj1);
