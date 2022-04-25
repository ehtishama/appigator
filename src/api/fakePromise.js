export function fakePromise(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
