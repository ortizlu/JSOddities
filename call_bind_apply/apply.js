let fox = {
  name: 'Fox',
  foxSayings: 'Ring-ding-ding-ding-dingeringeding!',
  whatDoesHeSay: function(...thingsToSay) {
    console.log('=================');
    console.log('Who am I: ' + this.name);
    console.log('==================');
    thingsToSay.map(saying => console.log(saying));
  }
};

let dog = {
  name: 'Dog'
};

// fox.whatDoesHeSay('Ring-ding-ding-ding-dingeringeding!');
fox.whatDoesHeSay.apply(dog, [
  'I want to make a fox noise too',
  'Wa-pa-pa-pa-pa-pa-pow!',
  'Hatee-hatee-hatee-ho!',
  'Joff-tchoff-tchoffo-tchoffo-tchoff!'
]);
