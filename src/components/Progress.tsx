import * as React from 'react'
import '../styles/Progress.css'
import IOneTask from 'src/states/oneTask';
import { progressTitlelayout } from 'src/states/progressTitleLayout';
import { useSelector, useDispatch } from 'react-redux';
import IState from 'src/states';
import { toArea } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import { advanceProgress, backProgress } from 'src/actions/ChangeProgress/ChangeProgressActionCreator';
import { progressNames } from 'src/states/progressName';

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
                  <div key={progressNameIndex} id="taskLayout">
                    {task.progress !== 0 && <span onClick={dispatchBackProgress}>◀</span>}
                    {task.name}
                    {task.progress !== (progressNames.length -1) && <span onClick={dispatchAdvenceProgress}>▶</span>}
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
