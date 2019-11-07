import * as React from 'react'
import '../../styles/Progress.css'
import TitleArea from './TitleArea';
import ProgressArea from './ProgressArea';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { changeProgressTask, changeOrderTask } from 'src/actions/Tasks/ActionCreator';
import IState from 'src/states';

export default function ProgressScreen() {
  const areaName = useSelector<IState, string>(state => state.display.areaName)
  const dispatch = useDispatch();
  
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    if(source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    if(source.droppableId === destination.droppableId) {
      dispatch(changeOrderTask({
        areaName,
        progressName: source.droppableId,
        taskName: draggableId,
        sourceTaskIndex: source.index,
        destinationTaskIndex: destination.index
      }))
      return;
    }

    dispatch(changeProgressTask({
      areaName, 
      taskName: draggableId, 
      sourceTaskIndex: source.index,
      sourceProgressName: source.droppableId,
      destinationTaskIndex: destination.index,
      destinationProgressName: destination.droppableId
    }))
    return;
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
