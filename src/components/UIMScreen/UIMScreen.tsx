import * as React from 'react'
import '../../styles/Area.css'
import '../../styles/index.css'
import AddTask from './AddTask';
import UIMArea from './UIMArea';

export default function UIMScreen() {
    return (
        <div id="areaContainer">
            <AddTask />
            <UIMArea />
        </div>
    )
}