import * as React from 'react'
import '../../styles/UIM.css'
import '../../styles/index.css'
import AddTaskArea from './AddTaskArea';
import UIMArea from './UIMArea';

export default function UIMScreen() {
    return (
        <div id="areaContainer">
            <AddTaskArea />
            <UIMArea />
        </div>
    )
}