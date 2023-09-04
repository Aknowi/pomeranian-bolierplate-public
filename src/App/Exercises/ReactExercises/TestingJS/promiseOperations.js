export function multiplyByTwo(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== 'number') {
      reject('To nie jest liczba!');
    } else {
      resolve(number * 2);
    }
  });
}
