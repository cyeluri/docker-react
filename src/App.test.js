import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders I was changed link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('I was changed');
  expect(linkElement).toBeInTheDocument();
});

