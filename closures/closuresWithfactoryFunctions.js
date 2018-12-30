function callVegetable(vegetable) {
  return function(greeting) {
    console.log(greeting + ' ' + vegetable);
  };
}

//in both cases, when call vegetable is returned, the potato and tomato functions have reference to what the vegatable originally was
const potato = callVegetable('POTATO');
const tomato = callVegetable('TOMATO');

potato("THAT'S A");
tomato("YO, DON'T SHOW ME YOUR");
