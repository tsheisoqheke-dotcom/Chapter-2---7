function arrayToList(array) {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--)
    list = { value: array[i], rest: list };

  return list;
}

function listToArray(list) {
  const array = [];

  while (list) {
    array.push(list.value);
    list = list.rest;
  }

  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, number) {
  while (list) {
    if (number === 0) return list.value;
    list = list.rest;
    number--;
  }
}

function nthRecursive(list, number) {
  if (!list) return undefined;
  if (number === 0) return list.value;
  return nthRecursive(list.rest, number - 1);
}

const list = arrayToList(["A", "B", "C"]);

console.log(listToArray(list));
console.log(prepend("X", list));
console.log(nth(list, 1));
console.log(nth(list, 5));
console.log(nthRecursive(list, 2));
console.log(nthRecursive(null, 0));

console.log(arrayToList([]));
