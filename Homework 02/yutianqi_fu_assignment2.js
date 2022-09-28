// Question 1:

const itemsObjec = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function doubleValue(array) {
  return array.map(({ quantity, price }) => {
    return {
      quantity: quantity * 2,
      price: price * 2,
    };
  });
}

function filterObject(array) {
  return array.filter(({ quantity, price }) => {
    return quantity > 2 && price > 300;
  });
}

function getSum(array) {
  return array.reduce((sum, curr) => sum + curr.quantity * curr.price, 0);
}

//Question 2:

const string =
  ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

const expectedReturnString =
  'perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array';

function removeSpacesAndNonAlpha(str) {
  return str
    .trim()
    .replace(/[^a-zA-Z\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

// Question 3:

const first = [
  { uuid: 2, name: 'test' },
  { uuid: 5, name: 'test5' },
  { uuid: 3, name: 'test3' },
];

const second = [
  { uuid: 6, role: 'pm' },
  { uuid: 4, role: 'engineer' },
  { uuid: 1, role: 'manager' },
  { uuid: 2, role: 'associate' },
];

const expectedReturnArray = [
  { uuid: 1, role: 'manager', name: null },
  { uuid: 2, role: 'associate', name: 'test' },
  { uuid: 3, role: null, name: 'test3' },
  { uuid: 4, role: 'engineer', name: null },
  { uuid: 5, role: null, name: 'test5' },
  { uuid: 6, role: 'pm', name: null },
];

function mergeTwo(arr1, arr2) {
  const res = [];
  const exist = [];
  let flag = false;
  for (const item1 of arr1) {
    for (const item2 of arr2) {
      if (item1.uuid === item2.uuid) {
        res.push({ uuid: item1.uuid, role: item2.role, name: item1.name });
        exist.push(item1.uuid);
        flag = true;
      }
    }
    if (!flag) {
      res.push({ uuid: item1.uuid, role: null, name: item1.name });
    }
    flag = false;
  }
  for (const item of arr2) {
    if (!exist.includes(item.uuid)) {
      res.push({ uuid: item.uuid, role: item.role, name: null });
    }
  }
  res.sort((a, b) => a.uuid - b.uuid);
  return res;
}
