import * as React from 'react'
import '../../styles/Progress.css'
import AreaTitle from './AreaTitle';
import ProgressArea from './ProgressArea';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';



export default function Progress() {
  const onDragEnd = (result: DropResult) => {
    console.log(JSON.stringify(result))
  }

  return (
    <div id="progressContainer">
      <AreaTitle />
      <DragDropContext onDragEnd={onDragEnd}>
        <ProgressArea />
      </DragDropContext>
    </div>
  )
};
