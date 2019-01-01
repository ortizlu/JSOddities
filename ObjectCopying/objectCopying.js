const item = {
  _id: 'A23412G4671e',
  id: 1,
  name: 'Spongebob Squarepants',
  setProp: (obj, item, val) => {
    return (obj[item] = val);
  },
  pattern: /$[0-7]*^/
};

function deepClone(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj; // primitives
  if (obj instanceof Set) return new Set(obj); // See note about this!
  if (hash.has(obj)) return hash.get(obj); // cyclic reference
  const result =
    obj instanceof Date
      ? new Date(obj)
      : obj instanceof RegExp
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

// Sample data
var p = {
  data: 1,
  children: [
    {
      data: 2,
      parent: null
    }
  ]
};
p.children[0].parent = p;

let item2 = deepClone(item);

// function copy(obj) {
//   if (!obj) {
//     return obj;
//   }

//   let v;
//   let item2 = Array.isArray(obj) ? [] : {};
//   for (const k in obj) {
//     v = obj[k];
//     item2[k] = typeof v === 'object' ? copy(v) : v;
//   }

//   return item2;
// }

// let item2 = JSON.parse(JSON.stringify(item));

// function createCopy(item) {
//   let item2 = {};
//   for (let prop in item) {
//     if (item[prop] != null && typeof item[prop] == 'object')
//       item2[prop] = createCopy(item[prop]);
//     else item2[prop] = item[prop];
//   }
//   return item2;
// }

// let item2 = createCopy(item);
