our sample item object that contains a function, REGEXP and other things. Normally, we could use JSON.parse(JSON.stringify(item)) to create an object, but unfortunately that does not work for functions or REGEX.

```js
const item = {
  _id: 'A23412G4671e',
  id: 1,
  name: 'Spongebob Squarepants',
  setProp: (obj, item, val) => {
    return (obj[item] = val);
  },
  pattern: /$[0-7]*^/
};

// let item2 = JSON.parse(JSON.stringify(item));
// console.log(item2);
```

the output of the above results in below. As you can see, the function is simply skipped and the REGEX is turned into an empty object

```js
//{ _id: 'A23412G4671e',
//  id: 1,
//  name: 'Spongebob Squarepants',
//  pattern: {} }
```

Which brings us to a function created by Tarun Sharma in https://medium.com/@tkssharma/objects-in-javascript-object-assign-deep-copy-64106c9aefab
Unfortunately for us, his function succeeds in copying functions but does not copy REGEXP items.

```js
function copy(obj) {
  if (!obj) {
    return obj;
  }

  let v;
  let item2 = Array.isArray(obj) ? [] : {};
  for (const k in obj) {
    v = obj[k];
    item2[k] = typeof v === 'object' ? copy(v) : v;
  }

  return item2;
}

function createCopy(item) {
  let item2 = {};
  for (let prop in item) {
    if (item[prop] != null && typeof item[prop] == 'object')
      item2[prop] = createCopy(item[prop]);
    else item2[prop] = item[prop];
  }
  return item2;
}

// let item2 = createCopy(item);
// console.log(item2);
```

The result is below. Everything is copied except for regular expressions.

```js
//{ \_id: 'A23412G4671e',
// id: 1,
// name: 'Spongebob Squarepants',
// setProp: [Function: setProp],
// pattern: {} }
```

Which brings us to this function provided to us by the StackOverflow community. This one succesfully copies functions as well as regular expressions

```js
function deepClone(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj; // primitives
  if (obj instanceof Set) return new Set(obj); // See note about this!
  if (hash.has(obj)) return hash.get(obj); // cyclic reference
  const result =
    obj instanceof Date
      ? //creates a copy of a date object
        new Date(obj)
      : //creates a copy of a regular expression
      obj instanceof RegExp
      ? new RegExp(obj.source, obj.flags)
      : obj.constructor
      ? new obj.constructor()
      : Object.create(null);
  hash.set(obj, result);
  if (obj instanceof Map)
    Array.from(obj, ([key, val]) => result.set(key, deepClone(val, hash)));
  return Object.assign(
    result,
    ...Object.keys(obj).map(key => ({ [key]: deepClone(obj[key], hash) }))
  );
}

let item2 = deepClone(item);
console.log(item2);
```

```js
//{ _id: 'A23412G4671e',
//  id: 1,
//  name: 'Spongebob Squarepants',
//  setProp: [Function: anonymous],
//  pattern: /$[0-7]*^/ }
```
