function countBs(string) {
  return countChar(string, "B");
}
function countChar(string, char) {
  let result = 0;
  for (let counter = 0; counter < string.length; counter++) {
    if (string[counter] === char) {
      result++;
    }
  }
  return result;
}

console.log(countBs("Books,Before,Boys,Because,Boys,Bring,Babys"));

console.log(countChar("kakkerlak", "k"));
