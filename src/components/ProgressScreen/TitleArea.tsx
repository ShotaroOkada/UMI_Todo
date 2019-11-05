import * as React from 'react'
import { progressTitlelayout } from 'src/states/Progress';
import { useDispatch, useSelector } from 'react-redux';
import { toArea } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import IState from 'src/states';

export default function AreaTitle() {
    const whereArea = useSelector<IState, number>(state => state.display.whereArea);
    const dispatch = useDispatch()
    const dispatchToArea = () => dispatch(toArea())
    return(
        <div id={progressTitlelayout[whereArea]} onClick={dispatchToArea} />
    )
}