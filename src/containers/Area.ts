import * as Redux from 'redux'
import Area, { IAreaDispatchProps } from "src/components/Area";
import IOneTask from 'src/states/oneTask';
import { addNewTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { connect } from 'react-redux';

function mapStateToProps() {
    return {

    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IAreaDispatchProps {
    return {
        addNewTask: (task: IOneTask) => {
            dispatch(addNewTask(task));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Area);
