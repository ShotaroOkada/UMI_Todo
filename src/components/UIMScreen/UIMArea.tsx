import * as React from 'react'
import { useSelector } from 'react-redux';
import IState from 'src/states';
import UIM from './UIM';
import { ITasks } from 'src/states/Task';

export default function UIMArea() {
    const tasks = useSelector<IState, ITasks>(state => state.tasks)
    return (
        <> {/*????JSX.Element????gridlayout?id???????? */}
            {Object.entries(tasks).map(([areaName, progressTasks]) => {
                return (
                    <UIM key={areaName} areaName={areaName} progressTasks={progressTasks}/>
                )
            })
            }
        </>
    )
}

