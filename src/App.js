import { useState } from 'react';
import SideBar from './Components/SideBar/SideBar';
import Chart from './Components/Chart/Chart';
import UseEmployeeData from './Hooks/UseEmployeeData';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [sourceId, setSourceId] = useState('');
  const [targetId, setTargetId] = useState('');
  const employees = UseEmployeeData(sourceId, targetId);
  const [department, setDepartment] = useState('');
  return (
    <DndProvider backend={HTML5Backend} >
      <div className="App">
        <SideBar employees={employees} department={department} setDepartment={setDepartment} />
        <Chart employees={employees} department={department} setSourceId ={setSourceId} setTargetId={setTargetId} />
      </div>
    </DndProvider>
  );
}

export default App;
