import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { InputPassword } from './core/components';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test password', () => {
  render(<InputPassword name='bob' />);
  const input = screen.getByTestId(/password/i);
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('');
});



