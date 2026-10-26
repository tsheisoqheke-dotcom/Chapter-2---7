function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(5, 5));
console.log(deepEqual(5, 10));
console.log(deepEqual({ a: 1 }, { a: 1 }));
console.log(deepEqual({ a: 1 }, { a: 2 }));
console.log(deepEqual({ a: { b: 2 } }, { a: { b: 2 } }));
console.log(deepEqual(null, null));
console.log(deepEqual(null, {}));
