import * as React from 'react'
import '../styles/Area.css'
import IOneTask from 'src/states/oneTask';

interface IAreaState {
    inputAddTask: string
}

export interface IAreaDispatchProps {
    addNewTask: (task: IOneTask) => void
}

export default class Area extends React.Component<IAreaDispatchProps, IAreaState> {
    constructor(props: IAreaDispatchProps) {
        super(props);
        this.state = {
            inputAddTask: ''
        };
        this.onInputAddTaskChange = this.onInputAddTaskChange.bind(this);
        this.submitNewTask = this.submitNewTask.bind(this);
    }

    public onInputAddTaskChange = (
        e: React.FormEvent<HTMLInputElement>
      ): void => {
        this.setState({
          inputAddTask: e.currentTarget.value
        });
      }; 

    public submitNewTask(){
        const createAddtaskObject: IOneTask = {
            name: this.state.inputAddTask,
            area: 0,
            progress: 0
        } 
        this.props.addNewTask(createAddtaskObject);
    }

    public render() {
        return(
            <div id="container">
                <div id="addTaskArea">
                    <input 
                    type="text"
                    value={this.state.inputAddTask}
                    onChange={this.onInputAddTaskChange}
                    />
                    <button onClick={this.submitNewTask}>追加</button>
                </div>
                <div id="area0">Area0</div>
                <div id="area1">Area1</div>
                <div id="area2">Area2</div>
                <div id="area3">Area3</div>
            </div>
        )
    }
}