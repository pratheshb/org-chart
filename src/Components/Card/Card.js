import { useDrag, useDrop } from 'react-dnd'
import EmployeeDetail from '../Shared/EmployeeDetail/EmployeeDetail'

export default function Card({ employee, setSourceId, setTargetId }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'employee',
        item: {id: employee.id},
        end: (draggedItem, monitor) => {
            const dropResult = monitor.getDropResult();
            if (draggedItem && dropResult) {
                setSourceId(draggedItem.id);
                setTargetId(dropResult.id);
            }
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const [_, drop] = useDrop({
        accept: 'employee',
        drop: () => ({id: employee.id})
    });
    return <div
        ref={el => { drag(el); drop(el); }}
        style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move'
        }}
    >
        <EmployeeDetail employee={employee} />
    </div>
}