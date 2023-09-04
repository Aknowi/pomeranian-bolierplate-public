export function delayedFunction(callback) {
  setTimeout(() => {
    callback('Wywołanie zwrotne!');
  }, 1000);
}
