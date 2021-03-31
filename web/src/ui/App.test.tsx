import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('task is added', async () => {
  render(<App />)
  fireEvent.click(screen.getByText('Add task'))
  expect(screen.getByText('hello')).toBeTruthy()
})