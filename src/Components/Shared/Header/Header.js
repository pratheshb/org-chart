import './Header.css'

import { MdFilterList, MdClear } from "react-icons/md";
export default function Header({isFilterVisible, onFilterChange}) {
    return <div className="header">
                <h1>Members</h1>
                {
                    !isFilterVisible ? <MdFilterList className="pointer" title="Filter" onClick={() => onFilterChange(!isFilterVisible)} /> :
                        <MdClear className="pointer" title="Clear" onClick={() => onFilterChange(!isFilterVisible)} />
                }
            </div>
}