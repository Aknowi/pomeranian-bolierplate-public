import { fetchData } from './fetchData';

test('Pobieranie danych z Api', async () => {
  const data = await fetchData();

  expect(data).toBeDefined();
});
