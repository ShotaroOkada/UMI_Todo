import * as React from 'react'
import '../../styles/Progress.css'
import TitleArea from './TitleArea';
import ProgressArea from './ProgressArea';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export default function ProgressScreen() {
  const onDragEnd = (result: DropResult) => {
    console.log(JSON.stringify(result))
  }

  return (
    <div id="progressContainer">
      <TitleArea />
      <DragDropContext onDragEnd={onDragEnd}>
        <ProgressArea />
      </DragDropContext>
    </div>
  )
};
