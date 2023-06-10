import { Tree, TreeNode } from 'react-organizational-chart'
import Card from '../Card/Card'
import isEmployeeAvailable from '../../utils/utils'
import './Chart.css'

export default function Chart({ employees, department, setSourceId, setTargetId }) {
    const rootNode = employees[0];

    const generateChildTree = (node) => {
        return node.childIds.map(childId => isEmployeeAvailable(employees[childId - 1], department, employees) ? generateTreeNode(employees[childId - 1]) : null)
    };
    const generateTreeNode = (node) => {
        return <TreeNode
            key={node.id}
            label={<Card employee={node} setSourceId ={setSourceId} setTargetId={setTargetId} />}
        >
            {
                generateChildTree(node)
            }
        </TreeNode>
    };
    return <main className='chart-container'>
        {rootNode && <Tree
            lineWidth={"1px"}
            lineColor={"#ccc"}
            lineBorderRadius={"4px"}
            label={<Card employee={rootNode} setSourceId ={setSourceId} setTargetId={setTargetId}  />}
        >
            {generateChildTree(rootNode)}
        </Tree>
        }
    </main>
}