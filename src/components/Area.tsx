import * as React from 'react'
import '../styles/Area.css'
import IOneTask from 'src/states/oneTask';
import { areaNames } from 'src/states/AreaName';
import IAllTasks from 'src/states/AllTasks';
import { progressLayout } from 'src/states/progressLayout';


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
    public submitNewTask() {
        if (this.state.inputAddTask === '') {
            return;
        }
        const createAddtaskObject: IOneTask = {
            name: this.state.inputAddTask,
            area: this.state.selectedArea,
            progress: 0
        }
        this.props.addNewTask(createAddtaskObject);
        this.setState({
            inputAddTask: ''
        })
    }

    // タスクを配置するエリアを選択するためのラジオボタン
    public selectAreaRatio() {
      const areaIcons: string[] = ['☀', '🌈', '☁', '☔']
      return (
        <div key='selectAreaRatio'>
          {
            areaIcons.map((areaIcon, index: number) => {
              return(<span key={index}>  
                  <input key={index} type="radio" name="area" value={index} checked={this.state.selectedArea === index}
                onChange={() => this.setState({selectedArea: index})} />
                 {areaIcon} 
                 &nbsp;
                 </span>
              )
            })
          }
        </div>
      )
    }

    public render() {
        return (
            <div id="areaContainer">
                <div id="addTaskArea">
                    <div id="appTitle">Urgent Important Matrix</div>
                    <br />
                    <div id='addTaskComponents'>
                        <input
                            type="text"
                            value={this.state.inputAddTask}
                            onChange={this.onInputAddTaskChange}
                        />
                        <button onClick={this.submitNewTask}>+</button>
                        {this.selectAreaRatio()}
                    </div>
                </div>
                <div id="area0">
                    <div id="title" onClick={() => this.props.toProgress(0)}>{areaNames[0]}</div>
                    {this.props.allTasks.area0Tasks.length !== null &&
                        this.props.allTasks.area0Tasks.map((task: IOneTask, index: number) => {
                            return <div key={task.name} id={progressLayout[task.progress]}>
                                {task.name} <span key={`dast${task.name}`} onClick={() => this.props.deleteTask(0, index)}>🗑️</span>
                            </div>
                        })}
                </div>
                <div id="area1">
                    <div id="title" onClick={() => this.props.toProgress(1)}>{areaNames[1]}</div>
                    {this.props.allTasks.area1Tasks.length !== null &&
                        this.props.allTasks.area1Tasks.map((task: IOneTask, index: number) => {
                            return <div key={task.name} id={progressLayout[task.progress]}>
                                {task.name} <span key={`dast${task.name}`} onClick={() => this.props.deleteTask(1, index)}>🗑️</span>
                            </div>
                        })}
                </div>
                <div id="area2">
                    <div id="title" onClick={() => this.props.toProgress(2)}>{areaNames[2]}</div>
                    {this.props.allTasks.area2Tasks.length !== null &&
                        this.props.allTasks.area2Tasks.map((task: IOneTask, index: number) => {
                            return <div key={task.name} id={progressLayout[task.progress]}>
                                {task.name} <span key={`dast${task.name}`} onClick={() => this.props.deleteTask(2, index)}>🗑️</span>
                            </div>
                        })}
                </div>
                <div id="area3">
                    <div id="title" onClick={() => this.props.toProgress(3)}>{areaNames[3]}</div>
                    {this.props.allTasks.area3Tasks.length !== null &&
                        this.props.allTasks.area3Tasks.map((task: IOneTask, index: number) => {
                            return <div key={task.name} id={progressLayout[task.progress]}>
                                {task.name} <span key={`dast${task.name}`} onClick={() => this.props.deleteTask(3, index)}>🗑️</span>
                            </div>
                        })}
                </div>
            </div>
        )
    }
}