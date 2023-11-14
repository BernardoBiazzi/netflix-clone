import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders App component', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});
