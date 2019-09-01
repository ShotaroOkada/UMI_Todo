import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import IState from 'src/states';
import { IOneTask } from 'src/states/Task';
import ProgressTask from './Task';
import { backProgress, advanceProgress } from 'src/actions/ChangeProgress/ChangeProgressActionCreator';

function returnNowAreaTasks(): IOneTask[] {
    const whereArea = useSelector((state: IState) => state.display.whereArea);
    const allTasks = useSelector((state: IState) => state.allTasks);
    switch (whereArea) {
      case 0:
        return allTasks.area0Tasks
      case 1:
        return allTasks.area1Tasks
      case 2:
        return allTasks.area2Tasks
      case 3:
        return allTasks.area3Tasks
      default:
        return []
    }
  }

type IProgressParentProps = {
    progressName: string,
    progressNameIndex: number
}

export default function Progress(props: IProgressParentProps) {
    const { progressName, progressNameIndex } = props;
    const whereArea = useSelector((state: IState) => state.display.whereArea);
    const dispatch = useDispatch();  
    return (
        <div id={progressName} key={progressName}>
          {progressName}
          {returnNowAreaTasks().map((task, taskIndex) => {
            const dispatchBackProgress = () => dispatch(backProgress(whereArea, taskIndex));
            const dispatchAdvenceProgress = () => dispatch(advanceProgress(whereArea, taskIndex));
            if (task.progress === progressNameIndex) {
              return <ProgressTask task={task} dispatchAdvenceProgress={dispatchAdvenceProgress} dispatchBackProgress={dispatchBackProgress} />
            } else {
              return 
            }
          })}
        </div>
      )
}