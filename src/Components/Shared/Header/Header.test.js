import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Members text', () => {
  render(<Header isFilterVisible={false} />);
  expect(screen.getByText('Members')).toBeInTheDocument();
  expect(screen.getByTitle('Filter')).toBeInTheDocument();
  render(<Header isFilterVisible={true} />);
  expect(screen.getByTitle('Clear')).toBeInTheDocument();
});