import * as React from 'react';
import { useSelector } from 'react-redux';
import Area from 'src/components/Area';
import Progress from 'src/components/Progress';
import IState from 'src/states';

function App() {
    const nowDisplay = useSelector((state: IState) => state.display.nowDisplay)
    return (
        <div style={{ height: '100%' }}>
            {nowDisplay === 'area' &&
                <Area />
            }
            {nowDisplay === 'progress' &&
                <Progress />
            }
        </div>
    )
}


export default App;