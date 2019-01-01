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
