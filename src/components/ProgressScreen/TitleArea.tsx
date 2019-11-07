import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import IState from 'src/states';
import { toArea } from 'src/actions/Display/ActionCreator';

export default function AreaTitle() {
    const areaName = useSelector<IState, string>(state => state.display.displayAreaName);
    const dispatch = useDispatch()
    const dispatchToArea = () => dispatch(toArea())
    return(
        <div id={areaName} onClick={dispatchToArea} />
    )
}