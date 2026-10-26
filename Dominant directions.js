function dominantDirection(text) {
  const counted = countBy(text, (char) => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : null;
  }).filter((item) => item.name !== null);

  if (counted.length === 0) return null;

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!"));

console.log(dominantDirection("sawbona Mhlaba"));
