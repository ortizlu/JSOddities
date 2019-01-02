//creating a class in the past
function Animal(name) {
  this.name = name;

  this.whoAmI = function() {
    console.log(`my name is ${this.name}`);
  };
}

//"new" creates a new object from that function
//then it invokes the Animal function, which the execution context creates a "this" variable, which now points to our new object "dog"
let dog = new Animal('scruffles');

console.log(dog.name); //scruffles
console.log(dog.whoAmI()); //my name is scruffles

//we see that the prototype is now the Animal prototype (object)
console.log(dog.__proto__); // Animal{}
