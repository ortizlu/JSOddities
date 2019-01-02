//creating a class in the past
function Animal(name) {
  this.name = name;
}

//"new" creates a new object from that function
//then it invokes the Animal function, which the execution context creates a "this" variable, which now points to our new object "dog"
let dog = new Animal('scruffles');

console.log(dog.name); //scruffles

//we also see that the prototype is now the Animal prototype (object)

console.log(dog.__proto__); // Animal{}

//but where does this prototype come from? Well it comes from the "prototype" property of Animal

console.log(Animal.prototype); //Animal{}

//so is the "prototype" property the actual prototype of the Animal function?

console.log(Animal.__proto__); //[Function]

//No. Every function has a "prototype" property so when the "new" keyword is used, it gives it to that new object

//The "prototype" from the Animal function starts its life as an empty object, but we can attach properties to it
Animal.prototype.whoAmI = function() {
  console.log(`my name is ${this.name}`);
};

//and then we can use it with the dog because of the prototype chain
console.log(dog.whoAmI()); //my name is scruffles

//why can't we just add it to Animal using
//this.whoAmI = ... ?
//we can, but since objects take up memory space, whenever a new Animal is created, a new copy of that whoAmI property will be created. So we will be using a lot of memory for no reason.
