function every1(array, predicate) {
  for (const value of array) {
    if (!predicate(value)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some((value) => !predicate(value));
}

console.log(every1([1, 2, 3], (n) => n > 0));
console.log(every2([1, 2, 3], (n) => n > 0));

console.log(every1([1, 2, 3], (n) => n > 2));
console.log(every2([1, 2, 3], (n) => n > 2));

console.log(every1([], (n) => n > 0));
console.log(every2([], (n) => n > 0));

console.log(every1(["cat", "dog"], (word) => word.length === 3));
console.log(every2(["cat", "dog"], (word) => word.length === 3));
