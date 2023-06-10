

function isMemberAvailable(employee, department) {
    return employee.department === department;
}

function isManagerAvailable(employee, department, list) {
    let manager = list[employee.managerId - 1];
    while (manager) {
        if (isMemberAvailable(manager, department)) {
            return true;
        }
        manager = list[manager.managerId - 1];
    }
    return false;
}

function isChildAvailable(employee, department, list) {
    for (const childId of employee.childIds) {
        const child = list[childId - 1];
        if (isMemberAvailable(child, department)) {
            return true;
        }
        if (isChildAvailable(child, department, list)) {
            return true;
        }
    }
    return false;

}

export default function isEmployeeAvailable(employee, department, list) {
    if (!department) {
        return true;
    }
    return isMemberAvailable(employee, department) || isManagerAvailable(employee, department, list) || isChildAvailable(employee, department, list);
}