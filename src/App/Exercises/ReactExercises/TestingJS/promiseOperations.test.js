import { multiplyByTwo } from './promiseOperations';

test('Mnożenie liczby przez 2', async () => {
  const result = await multiplyByTwo(4);

  expect(result).toBe(8);
});

test('Rzucenie błedu przy niepoprawnym argumencie', async () => {
  try {
    await multiplyByTwo('abc');
  } catch (error) {
    expect(error).toBe('To nie jest liczba!');
  }
});
