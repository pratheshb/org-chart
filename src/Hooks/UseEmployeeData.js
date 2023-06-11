import { useEffect, useState } from 'react'

export default function UseEmployeeData(sourceId, targetId) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function fetchEmployee() {
      const res = await fetch('/data.json');
      const data = await res.json();
      if (!ignore) {
        data.forEach(emp => {
          emp.childIds = [];
          if (emp.managerId) {
            const parent = data[emp.managerId - 1];
            if (!parent.childIds) {
              parent.childIds = [];
            }
            parent.childIds.push(emp.id);
          }
        });
        setEmployees(data);
      }
      ignore = true;
    }

    fetchEmployee();

    return () => { ignore = true }

  }, []);


  useEffect(() => {

    if (sourceId && targetId && sourceId !== targetId) {

      const isTargetChild = (employee) => {
        for(const childId of employee.childIds) {
          if(childId === targetId) {
            return true;
          }
          if(isTargetChild(employees[childId -1])) {
            return true;
          }
        }
        return false;
      }
      const updatedEmployees = employees.map((employee) => {
        if (sourceId === employee.id && !isTargetChild(employee)) {
          return ({
            ...employee,
            managerId: targetId,
            childIds: []
          });
        }
        return ({
          ...employee,
          childIds: []
        });
      });

      updatedEmployees.forEach(emp => {
        if (emp.managerId) {
          const parent = updatedEmployees[emp.managerId - 1];
          if (!parent.childIds) {
            parent.childIds = [];
          }
          parent.childIds.push(emp.id);
        }
      });



      setEmployees(updatedEmployees)
    }

  }, [sourceId, targetId])

  return employees;
}