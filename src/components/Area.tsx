import * as React from 'react'
import '../styles/Area.css'
import IOneTask from 'src/states/oneTask';
import { areaNames } from 'src/states/AreaName';
import IAllTasks from 'src/states/AllTasks';


interface IAreaState {
    inputAddTask: string,
    selectedArea: number
}

export interface IAreaConnectProps {
    allTasks: IAllTasks
}

export interface IAreaDispatchProps {
    addNewTask: (task: IOneTask) => void
    deleteTask: (area: number, taskId: number) => void
    toProgress: (area: number) => void
}

type IAreaProps = IAreaConnectProps & IAreaDispatchProps;

export default class Area extends React.Component<IAreaProps, IAreaState> {
    constructor(props: IAreaProps) {
        super(props);
        this.state = {
            inputAddTask: '',
            selectedArea: 0
        };
        this.onInputAddTaskChange = this.onInputAddTaskChange.bind(this);
        this.submitNewTask = this.submitNewTask.bind(this);
        this.handleChangePulldown = this.handleChangePulldown.bind(this);
    }


    // タスク追加フォームのイベント
    public onInputAddTaskChange = (
        e: React.FormEvent<HTMLInputElement>
      ): void => {
        this.setState({
          inputAddTask: e.currentTarget.value
        });
      }; 

    // プルダウンのイベント
    public handleChangePulldown(event: React.ChangeEvent<HTMLSelectElement>) {
      this.setState({
            selectedArea: parseInt(event.target.value, 10)
      });
    }

    // タスク追加ボタンのイベント
    public submitNewTask(){
        const createAddtaskObject: IOneTask = {
            name: this.state.inputAddTask,
            area: this.state.selectedArea,
            progress: 0
        } 
        this.props.addNewTask(createAddtaskObject);
    }

    // 保存エリアを指定するためのプルダウン
    public selectAreaPulldown() {
        return (
            <form key='selectAreaPulldown'>
                <select key="allAreaName" onChange={this.handleChangePulldown}>
                    {areaNames.map((areaName: string, index: number) => 
                        <option key={areaName} value={index}>
                            {areaName}
                        </option>
                    )}
                </select>
            </form>
        )
    }

    public render() {
        return(
            <div id="areaContainer">
                <div id="addTaskArea">
                    <input 
                    type="text"
                    value={this.state.inputAddTask}
                    onChange={this.onInputAddTaskChange}
                    />
                    {this.selectAreaPulldown()}
                    <button onClick={this.submitNewTask}>追加</button>
                </div>
                <div id="area0">
                   <div onClick={() => this.props.toProgress(0)}>Area0</div> 
                    { this.props.allTasks.area0Tasks.length !== null &&
                        this.props.allTasks.area0Tasks.map((task: IOneTask, index: number) => {
                       return <div key={task.name}>
                                {task.name} <p key={`dast${task.name}`} onClick={() =>this.props.deleteTask(0, index)}>🚮</p>
                              </div>
                    })  }
                </div>
                <div id="area1">
                <div onClick={() => this.props.toProgress(1)}>Area1</div> 
                    { this.props.allTasks.area1Tasks.length !== null &&
                        this.props.allTasks.area1Tasks.map((task: IOneTask, index: number) => {
                            return <div key={task.name}>
                            {task.name} <p key={`dast${task.name}`} onClick={() =>this.props.deleteTask(1, index)}>🚮</p>
                          </div>
                    })  }
                </div>
                <div id="area2">
                <div onClick={() => this.props.toProgress(2)}>Area2</div> 
                    { this.props.allTasks.area2Tasks.length !== null &&
                        this.props.allTasks.area2Tasks.map((task: IOneTask, index: number) => {
                            return <div key={task.name}>
                            {task.name} <p key={`dast${task.name}`} onClick={() =>this.props.deleteTask(2, index)}>🚮</p>
                          </div>
                    })  }
                </div>
                <div id="area3">
                <div onClick={() => this.props.toProgress(3)}>Area0</div> 
                    { this.props.allTasks.area3Tasks.length !== null &&
                        this.props.allTasks.area3Tasks.map((task: IOneTask, index: number) => {
                            return <div key={task.name}>
                            {task.name} <p key={`dast${task.name}`} onClick={() =>this.props.deleteTask(3, index)}>🚮</p>
                          </div>
                    })  }
                </div>
            </div>
        )
    }
}