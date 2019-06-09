import * as Redux from 'redux'
import { connect } from 'react-redux';
import Progress, { IProgressConnectProps, IProgressDispatchProps } from 'src/components/Progress';
import IState from 'src/states';
import { toArea } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import { advanceProgress, backProgress } from 'src/actions/ChangeProgress/ChangeProgressActionCreator';

function mapStateToProps(state: IState): IProgressConnectProps {
    return {
        display: state.display,
        allTasks: state.allTasks
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IProgressDispatchProps {
    return {
        toArea: () => {
            dispatch(toArea());
        },
        advanceProgress: (area: number, taskId: number) => {
            dispatch(advanceProgress(area, taskId));
        },
        backProgress: (area: number, taskId: number) => {
            dispatch(backProgress(area, taskId))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Progress);