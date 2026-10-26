function sum(array) {
  let total = 0;

  for (const number of array) {
    total += number;
  }

  return total;
}
function range(start, end, step = 1) {
  const result = [];

  if (step === 0) {
    throw new Error("Step cannot be 0");
  }

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}

// Examples:
console.log(range(1, 5));
console.log(range(1, 10, 2));
console.log(range(5, 1, -1));
console.log(range(10, 2, -2));
console.log(range(1, 10));
console.log(sum([1, 10]));
