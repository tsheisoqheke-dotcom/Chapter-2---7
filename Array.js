function reverseArray(array) {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length % 2); i++) {
    const opposite = array.length - 1 - i;

    const temp = array[i];
    array[i] = array[opposite];
    array[opposite] = temp;
  }

  return array;
}

const array1 = ["A", "B", "C", "D", "E"];

const reversed1 = reverseArray(array1);

console.log(reversed1);

console.log(array1);

const array2 = ["A", "B", "C", "D", "E"];

const reversed2 = reverseArrayInPlace(array2);

console.log(reversed2);

console.log(array2);
