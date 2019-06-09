import * as React from 'react'
import '../styles/Progress.css'
import IDisplay from 'src/states/Display';
import IAllTasks from 'src/states/AllTasks';
import IOneTask from 'src/states/oneTask';
import { progressTitlelayout } from 'src/states/progressTitleLayout';

export interface IProgressConnectProps {
    display: IDisplay
    allTasks: IAllTasks
}

export interface IProgressDispatchProps {
    toArea: () => void
    advanceProgress: (area: number, taskId: number) => void
    backProgress: (area: number, taskId: number) => void
}

type IProgressProps = IProgressConnectProps & IProgressDispatchProps;

export default class Progress extends React.Component<IProgressProps> {
    public returnNowAreaTasks(): IOneTask[]{
        { switch(this.props.display.whereArea) {
            case 0:
                return this.props.allTasks.area0Tasks
            case 1:
                return this.props.allTasks.area1Tasks        
            case 2:
                return this.props.allTasks.area2Tasks
            case 3:
                return this.props.allTasks.area3Tasks
            default: 
                return []
            }             
        }
    }

   public render() {
    return(
      <div id="progressContainer">
        <div id={progressTitlelayout[this.props.display.whereArea]} onClick={this.props.toArea} />
          {/* {areaNames[this.props.display.whereArea]} */}
        <div id="idea">
          idea
            {this.returnNowAreaTasks().map( (task: IOneTask, index: number) => {
              if(task.progress === 0) {
                return <div key={index} id="taskLayout">
                  {task.name}
                  <span onClick={() => this.props.advanceProgress(this.props.display.whereArea, index)}>▶</span>
                </div>
              } else {
                  return
              }
            })}
        </div>
        <div id="planning">
          planning
            {this.returnNowAreaTasks().map( (task: IOneTask, index: number) => {
              if(task.progress === 1) {
                return <div key={index} id="taskLayout">
                  <span onClick={() => this.props.backProgress(this.props.display.whereArea, index)}>◀</span>
                    {task.name}
                  <span onClick={() => this.props.advanceProgress(this.props.display.whereArea, index)}>▶</span>
                </div>
                } else {
                   return 
                }
            })}
        </div>
        <div id="donePlan">
          planDone
            {this.returnNowAreaTasks().map( (task: IOneTask, index: number) => {
              if(task.progress === 2) {
                return <div key={index} id="taskLayout">
                  <span onClick={() => this.props.backProgress(this.props.display.whereArea, index)}>◀</span>
                    {task.name}
                  <span onClick={() => this.props.advanceProgress(this.props.display.whereArea, index)}>▶</span>
                </div>
                } else {
                   return 
                }
            })}
        </div>
        <div id="doing">
          doing
            {this.returnNowAreaTasks().map( (task: IOneTask, index: number) => {
              if(task.progress === 3) {
                return <div key={index} id="taskLayout">
                  <span onClick={() => this.props.backProgress(this.props.display.whereArea, index)}>◀</span>
                    {task.name}
                  <span onClick={() => this.props.advanceProgress(this.props.display.whereArea, index)}>▶</span>
                </div>
                } else {
                   return 
                }
            })}    
        </div>
        <div id="done">
          done
            {this.returnNowAreaTasks().map( (task: IOneTask, index: number) => {
              if(task.progress === 4) {
                return <div key={index} id="taskLayout">
                  <span onClick={() => this.props.backProgress(this.props.display.whereArea, index)}>◀</span>
                    {task.name}
                </div>
                } else {
                   return 
                }
            })}
        </div>
      </div>
        )
    }
}