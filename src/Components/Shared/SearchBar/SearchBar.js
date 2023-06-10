import './SearchBar.css'

export default function SearchBar({
    searchText,
    setSearchText,
    department,
    setDepartment,
    departments
}) {
    return <div className="search-container">
        <input className="search" placeholder="Filter By Name" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <select className="search" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Filter By Department</option>
            {departments.map(department => (
                <option value={department} key={department}>{department}</option>
            ))}
        </select>
    </div>
}