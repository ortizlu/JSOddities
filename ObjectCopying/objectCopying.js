const item = {
  _id: 'A23412G4671e',
  id: 1,
  name: 'Spongebob Squarepants',
  setProp: (obj, item, val) => {
    return (obj[item] = val);
  },
  pattern: /$[0-7]*^/
};

function createCopy(item) {
  let item2 = {};
  for (let prop in item) {
    if (item[prop] != null && typeof item[prop] == 'object')
      item2[prop] = createCopy(item[prop]);
    else item2[prop] = item[prop];
  }
  return item2;
}

let item2 = createCopy(item);

console.log(item2);
