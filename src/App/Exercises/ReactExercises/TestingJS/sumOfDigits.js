export const sumOfDigits = (n) => {
  let stringArray = n.toString().split('');
  let numberArray = stringArray.map((s) => +s);
  return numberArray.reduce((acc, curr) => acc + curr);
};
