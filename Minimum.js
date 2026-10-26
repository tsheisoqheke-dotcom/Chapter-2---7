function min(a, b) {
  const c = "same";
  if (a < b) return a;
  else if (b < a) return b;
  else return c;
}
console.log(min(100, 100));
