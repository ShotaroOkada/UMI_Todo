import * as React from 'react'
import '../styles/Progress.css'
import IOneTask from 'src/states/oneTask';
import { progressTitlelayout } from 'src/states/progressTitleLayout';
import { useSelector, useDispatch } from 'react-redux';
import IState from 'src/states';
import { toArea } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import { advanceProgress, backProgress } from 'src/actions/ChangeProgress/ChangeProgressActionCreator';

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
  const dispatchAdvenceProgress0 = (index: number) => dispatch(advanceProgress(whereArea, index))
  return (
    <div id="progressContainer">
      <div id={progressTitlelayout[whereArea]} onClick={dispatchToArea} />
      <div id="idea">
        idea
          {returnNowAreaTasks().map((task: IOneTask, index: number) => {
          if (task.progress === 0) {
            const dispatchAdvenceProgress = () => dispatchAdvenceProgress0(index)
            return <div key={index} id="taskLayout">
              {task.name}
              <span onClick={dispatchAdvenceProgress}>▶</span>
            </div>
          } else {
            return
          }
        })}
      </div>
      <div id="planning">
        planning
          {returnNowAreaTasks().map((task: IOneTask, index: number) => {
          if (task.progress === 1) {
            return <div key={index} id="taskLayout">
              <span onClick={() => dispatch(backProgress(whereArea, index))}>◀</span>
              {task.name}
              <span onClick={() => dispatch(advanceProgress(whereArea, index))}>▶</span>
            </div>
          } else {
            return
          }
        })}
      </div>
      <div id="donePlan">
        planDone
          {returnNowAreaTasks().map((task: IOneTask, index: number) => {
          if (task.progress === 2) {
            return <div key={index} id="taskLayout">
              <span onClick={() => dispatch(backProgress(whereArea, index))}>◀</span>
              {task.name}
              <span onClick={() => dispatch(advanceProgress(whereArea, index))}>▶</span>
            </div>
          } else {
            return
          }
        })}
      </div>
      <div id="doing">
        doing
          {returnNowAreaTasks().map((task: IOneTask, index: number) => {
          if (task.progress === 3) {
            return <div key={index} id="taskLayout">
              <span onClick={() => dispatch(backProgress(whereArea, index))}>◀</span>
              {task.name}
              <span onClick={() => dispatch(advanceProgress(whereArea, index))}>▶</span>
            </div>
          } else {
            return
          }
        })}
      </div>
      <div id="done">
        done
          {returnNowAreaTasks().map((task: IOneTask, index: number) => {
          if (task.progress === 4) {
            return <div key={index} id="taskLayout">
              <span onClick={() => dispatch(backProgress(whereArea, index))}>◀</span>
              {task.name}
            </div>
          } else {
            return
          }
        })}
      </div>
    </div>
  )
};
