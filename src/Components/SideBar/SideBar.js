import { useState } from "react"
import EmployeeList from "../Shared/EmployeeList/EmployeeList"
import Header from "../Shared/Header/Header"
import SearchBar from "../Shared/SearchBar/SearchBar"
import './SideBar.css'

export default function SideBar({ employees, department, setDepartment }) {
    const [searchText, setSearchText] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const departments = [...new Set(employees.map(employee => employee.department))];
    const filteredEmployees = employees.filter(employee => {
        const text = searchText.toLowerCase();
        let isDptAvailable = true;
        if(department) {
           isDptAvailable = employee.department === department;
        }
        return employee.name.toLowerCase().includes(text) && isDptAvailable;
    });

    function handleFilterChange(nextState) {
        if(!nextState) {
            setSearchText('');
            setDepartment('');
        }
        setIsFilterVisible(nextState);
    }

    return (
        <aside>
            <Header 
            isFilterVisible={isFilterVisible} 
            onFilterChange = { handleFilterChange }
            />
            {
                isFilterVisible && <SearchBar 
                searchText={searchText}
                setSearchText={setSearchText} 
                department ={department}
                setDepartment = {setDepartment}
                departments ={departments}
                />
            }
            <EmployeeList employees={filteredEmployees} isFilterVisible={isFilterVisible} />
        </aside>
    )
}