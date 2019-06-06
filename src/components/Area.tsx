import * as React from 'react'
import '../styles/Area.css'

interface IAreaState {
    inputAddTask: string
}

export default class Area extends React.Component<{}, IAreaState> {
    public readonly state = {
        inputAddTask: ''
    }

    public onInputStartHourChange = (
        e: React.FormEvent<HTMLInputElement>
      ): void => {
        this.setState({
          inputAddTask: e.currentTarget.value
        });
      }; 

    public render() {
        return(
            <div id="container">
                <div id="addTaskArea">
                    <input 
                    type="text"
                    value={this.state.inputAddTask}
                    onChange={this.onInputStartHourChange}
                    />
                </div>
                <div id="area0">Area0</div>
                <div id="area1">Area1</div>
                <div id="area2">Area2</div>
                <div id="area3">Area3</div>
            </div>
        )
    }
}