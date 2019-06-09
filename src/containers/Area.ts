import * as Redux from 'redux'
import Area, { IAreaDispatchProps, IAreaConnectProps } from "src/components/Area";
import IOneTask from 'src/states/oneTask';
import { addNewTask, deleteTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { connect } from 'react-redux';
import IState from 'src/states';
import { toProgress } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';

function mapStateToProps(state: IState): IAreaConnectProps {
    return {
        allTasks: state.allTasks
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IAreaDispatchProps {
    return {
        addNewTask: (task: IOneTask) => {
            dispatch(addNewTask(task));
        },
        deleteTask: (area: number, taskId: number) => {
            dispatch(deleteTask(area, taskId))
        },
        toProgress: (area: number) => {
            dispatch(toProgress(area));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Area);
