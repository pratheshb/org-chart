import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Members text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Members/i);
  expect(linkElement).toBeInTheDocument();
});
