import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders greeting text', () => {
  const { getByText } = render(<App />);
  const greetingElement = getByText(/Hello, TypeScript!/i);
  expect(greetingElement).toBeInTheDocument();
});