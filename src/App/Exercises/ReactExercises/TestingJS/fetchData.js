export async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error('Błąd pobierania danych');
  }

  const data = await response.json();
  return data;
}
