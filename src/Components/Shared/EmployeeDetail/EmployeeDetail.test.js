import { render, screen } from '@testing-library/react';
import EmployeeDetail from './EmployeeDetail';

test('renders Members text', () => {
  const employee = {
    name: 'test'
  }
  render(<EmployeeDetail employee={employee}/>);
  expect(screen.getByText(employee.name)).toBeInTheDocument();
});