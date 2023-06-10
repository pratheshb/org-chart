import EmployeeDetail from '../EmployeeDetail/EmployeeDetail'
import './EmployeeList.css'

export default function EmployeeList({ employees, isFilterVisible }) {
    const occupiedHeight = isFilterVisible ? '8rem' : '3.2rem';
    return <ul
        className='list'
        style={{ height: `calc(100vh - ${occupiedHeight})` }}
    >
        {
            employees.map(employee => (
                <li key={employee.id}>
                    <div className='list-card'>
                        <EmployeeDetail employee={employee} />
                    </div>
                </li>
            ))
        }
    </ul>
}