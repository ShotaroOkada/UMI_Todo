import * as React from 'react'
import '../../styles/Progress.css'
import TitleArea from './TitleArea';
import ProgressArea from './ProgressArea';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { changeProgressTask } from 'src/actions/Tasks/ActionCreator';
import IState from 'src/states';

export default function ProgressScreen() {
  const areaName = useSelector<IState, string>(state => state.display.areaName)
  const dispatch = useDispatch();
  const onDragEnd = (result: DropResult) => {
    console.log(JSON.stringify(result))
    if(!result.destination) {
      return;
    }
    dispatch(changeProgressTask({
      areaName, 
      taskName: result.draggableId, 
      sourceTaskIndex: result.source.index,
      sourceProgressName: result.source.droppableId,
      destinationTaskIndex: result.destination.index,
      destinationProgressName: result.destination.droppableId,
    }))
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
