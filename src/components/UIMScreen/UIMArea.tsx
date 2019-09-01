import * as React from 'react'
import { useSelector } from 'react-redux';
import IState from 'src/states';
import UIM from './UIM';

export default function UIMArea() {
    const allTasks = useSelector((state: IState) => state.allTasks)
    const areaTasks = [allTasks.area0Tasks, allTasks.area1Tasks, allTasks.area2Tasks, allTasks.area3Tasks]
    return (
        <> {/*????JSX.Element????gridlayout?id???????? */}
            {areaTasks.map((areaTask, areaIndex) => {
                return (
                    <UIM key={`area${areaIndex}`} tasks={areaTask} areaIndex={areaIndex} />
                )
            })}
        </>
    )
}

