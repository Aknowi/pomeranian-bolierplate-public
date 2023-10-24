import { render, fireEvent } from '@testing-library/react';

import { Input } from './Input';

test('Wprowadzanie tekstu zmienia jego treść', () => {
  const { getByText, getByTestId } = render(<Input />);
  const inputElement = getByTestId('textInput');
  const countElement = getByText('Wpisany tekst:');

  fireEvent.change(inputElement, { target: { value: 'test' } });

  expect(countElement).toHaveTextContent('Wpisany tekst: test');
});
