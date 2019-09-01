import * as React from 'react';
import { useSelector } from 'react-redux';
import AreaScreen from './UIMScreen/UIMScreen';
import Progress from 'src/components/ProgressScreen/ProgressScreen';
import IState from 'src/states';

function App() {
    const nowDisplay = useSelector((state: IState) => state.display.nowDisplay)
    return (
        <div style={{ height: '100%' }}>
            {nowDisplay === 'area' &&
                <AreaScreen />
            }
            {nowDisplay === 'progress' &&
                <Progress />
            }
        </div>
    )
}


export default App;