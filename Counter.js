for (let number = 1; number <= 100; number += 1) {
  console.log(number);
}
for (let number = 1; number <= 100; number += 1) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("fizzbuzz");
  } else if (number % 3 === 0) {
    console.log("fizz");
  } else if (number % 5 === 0) {
    console.log("buzz");
  }
  console.log(number);
}
