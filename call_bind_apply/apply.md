# Apply

```js
let fox = {
  name: 'Fox',
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
```

Apply is similar to `call` because it invokes the function immediately (unlike `bind` which creates a copy of the function). The only difference is that now with `apply` we can pass in an array to hold in all our parameters instead of passing them in one by one like we do with `call`.

Normally we can call the fox's whatDoesHeSay() function and it would spit out

```js
fox.whatDoesHeSay('Ring-ding-ding-ding-dingeringeding!');

//=================
//Who am I: Fox
//==================
//Ring-ding-ding-ding-dingeringeding!
```

But we can use apply to change the "this" reference to point to the dog, and now the dog can say all of the silly fox noises too.

```js
fox.whatDoesHeSay.apply(dog, [
  'I want to make a fox noise too',
  'Wa-pa-pa-pa-pa-pa-pow!',
  'Hatee-hatee-hatee-ho!',
  'Joff-tchoff-tchoffo-tchoffo-tchoff!'
]);

//=================
//Who am I: Dog
//==================
//I want to make a fox noise too
//Wa-pa-pa-pa-pa-pa-pow!
//Hatee-hatee-hatee-ho!
//Joff-tchoff-tchoffo-tchoffo-tchoff!
```
