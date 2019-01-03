const item = {
  _id: 'A23412G4671e',
  id: 1,
  obj: {
    a: 'first',
    b: 'second'
  },
  name: 'Spongebob Squarepants',
  setProp: (obj, item, val) => {
    return (obj[item] = val);
  },
  pattern: /$[0-7]*^/
};

Function.prototype.clone = function() {
  var newfun;
  //evaluates the string to actually be a function. In this case 'newfun=' + this.toString() would result in
  // newfun=(obj, item, val) => {
  //  return (obj[item] = val);
  // }
  eval('newfun=' + this.toString());
  //for every property in the old function, the new function gets the properties too
  for (var key in this) newfun[key] = this[key];
  return newfun;
};

function objectCopy(obj) {
  let obj2 = {};

  for (key in obj) {
    if (obj[key] instanceof RegExp) {
      obj2[key] = new RegExp(obj[key]);
    } else if (typeof obj[key] === 'function') {
      obj2[key] = obj[key].clone();
    } else if (typeof obj[key] === 'string') {
      obj2[key] = obj[key];
    } else if (typeof obj[key] === 'number') {
      obj2[key] = obj[key];
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      obj2[key] = objectCopy(obj[key]);
    }
  }
  return obj2;
}

//copy the item
let obj2 = objectCopy(item);

//change item to prove it is not dependent on old item
// item.name = 'Bob Esponja';
// item.setProp = () => console.log('hello');
// item.pattern = /$[0-8]*^/;
// item.id = 5;
// item.obj = { c: 3, d: 4 };

console.log('CHANGED ITEM');
console.log(item);
console.log('************');

console.log('CLONED ITEM');
console.log(obj2);
console.log('************');

console.log(item === obj2);
