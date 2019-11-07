import * as React from 'react';
import { useSelector } from 'react-redux';
import AreaScreen from './UIMScreen/UIMScreen';
import ProgressScreen from 'src/components/ProgressScreen/ProgressScreen';
import IState from 'src/states';
import { displayName } from 'src/states/Display';

function App() {
    const displayScreen = useSelector<IState, string>(state => state.display.displayScreen)
    return (
        <div style={{ height: '100%' }}>
            {displayScreen === displayName.area &&
                <AreaScreen />
            }
            {displayScreen === displayName.progress &&
                <ProgressScreen />
            }
        </div>
    )
}


export default App;