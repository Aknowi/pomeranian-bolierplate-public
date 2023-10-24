import { render, fireEvent } from '@testing-library/react';

import { Counter } from './Counter';

test('Kliknięcie na przycisk zwiększa licznik', () => {
  const { getByText } = render(<Counter />);
  const buttonElement = getByText('Zwiększ');
  const countElement = getByText('Licznik: 0');

  fireEvent.click(buttonElement);

  expect(countElement).toHaveTextContent('Licznik: 1');
});
