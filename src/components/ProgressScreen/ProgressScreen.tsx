import * as React from 'react'
import '../../styles/Progress.css'
import { useSelector, useDispatch } from 'react-redux';
import IState from 'src/states';
import { toArea } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import { advanceProgress, backProgress } from 'src/actions/ChangeProgress/ChangeProgressActionCreator';
import { progressTitlelayout, progressNames } from 'src/states/Progress';
import { IOneTask } from 'src/states/Task';

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

export default function Progress() {
  const whereArea = useSelector((state: IState) => state.display.whereArea);
  const dispatch = useDispatch();
  const dispatchToArea = () => dispatch(toArea())
  return (
    <div id="progressContainer">
      <div id={progressTitlelayout[whereArea]} onClick={dispatchToArea} />
      {progressNames.map((progressName, progressNameIndex) => {
        return (
          <div id={progressName} key={progressName}>
            {progressName}
            {returnNowAreaTasks().map((task, taskIndex) => {
              const dispatchBackProgress = () => dispatch(backProgress(whereArea, taskIndex));
              const dispatchAdvenceProgress = () => dispatch(advanceProgress(whereArea, taskIndex));
              if (task.progress === progressNameIndex) {
                return (
                  <div key={task.name} id="taskLayout">
                    {task.progress !== 0 && <span id={'arrow'} onClick={dispatchBackProgress}>◀</span>}
                    {task.name}
                    {console.log(`taskIndex→${taskIndex}　taskName→${task.name}　taskProgress→${task.progress}`)}
                    {task.progress !== (progressNames.length -1) && <span id={'arrow'} onClick={dispatchAdvenceProgress}>▶</span>}
                  </div>
                )
              } else {
                return 
              }
            })}
          </div>
        )
      })}
    </div>
  )
};
