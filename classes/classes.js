class Animal {
  constructor(name) {
    this.name = name;
  }

  animal() {
    console.log('I am an animal');
  }
}

//A "class" is not really a class but a function
console.log(Animal.__proto__); //[Function]
console.log(Animal.__proto__.__proto__); //{} <- the big daddy base Object
