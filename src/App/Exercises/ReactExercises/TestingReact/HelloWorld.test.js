import { render } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

test('Renderowanie komponentu HelloWorld', () => {
  const { getByText } = render(<HelloWorld />);
  const element = getByText('Hello World');

  expect(element).toBeInTheDocument();
});
