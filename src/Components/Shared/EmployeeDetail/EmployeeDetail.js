import './EmployeeDetail.css'

function Avatar({ imgSrc, altText }) {
    return <img style={{ borderRadius: '50%' }} width={48} height={48} src={imgSrc} alt={altText} />
}

export default function EmployeeDetail({ employee }) {
    return <>
        <Avatar imgSrc={employee.avatar} altText={employee.name} />
        <div className="employee-typography">
            <strong>{employee.name}</strong>
            <p>{employee.designation}</p>
            <p>{employee.department}</p>
        </div>
    </>
}