import * as React from 'react'
import '../styles/Area.css'

export default class Area extends React.Component {
    public render() {
        return(
            <div id="container">
                <div id="addTaskArea">AddtaskArea</div>
                <div id="area0">Area0</div>
                <div id="area1">Area1</div>
                <div id="area2">Area2</div>
                <div id="area3">Area3</div>
            </div>
        )
    }
}