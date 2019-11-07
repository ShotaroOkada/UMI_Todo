import * as React from 'react';
import { useSelector } from 'react-redux';
import AreaScreen from './UIMScreen/UIMScreen';
import ProgressScreen from 'src/components/ProgressScreen/ProgressScreen';
import IState from 'src/states';
import { displayName } from 'src/states/Display';

function App() {
    const screen = useSelector<IState, string>(state => state.display.screen)
    return (
        <div style={{ height: '100%' }}>
            {screen === displayName.area &&
                <AreaScreen />
            }
            {screen === displayName.progress &&
                <ProgressScreen />
            }
        </div>
    )
}


export default App;