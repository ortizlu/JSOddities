//Instead of using classical inheritance "or what appears to be" in JS, it is better to fully use the power of prototypal inheritance. With Object.create(), we are able to create new objects from old ones that inherit properties and methods of the old object using the prototype of each object.

//but what if our JS engine doesn't support object.create()? We can use a polyfill, or code to implement the same feature in old browsers/engines

//OBJECT.CREATE POLYFILL
if (!Object.create) {
  Object.create = function(obj) {
    if (arguments.length > 1) {
      throw new Error(
        'Object.create implementation' + ' only accepts the first parameter.'
      );
    }
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

let person = {
  firstname: 'firstname',
  lastname: 'lastname',
  greet: function() {
    return 'Hi, my name is ' + this.firstname;
  }
};

let maddie = Object.create(person);
//Object.create creates a new object with its prototype being "person"
console.log(maddie.greet());
maddie.firstname = 'Maddie';
maddie.lastname = 'Wilkins';
console.log(maddie.greet());
