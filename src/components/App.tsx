import * as React from 'react';
import { useSelector } from 'react-redux';
import Area from 'src/components/Area';
import Progress from 'src/components/Progress';
import IState from 'src/states';


// export interface IAppConnectProps {
//     display: IDisplay
// }

// export default class App extends React.Component<IAppConnectProps> {
//     public render() {
//         return(
//             <div style={{height: '100%'}}>
//                 { this.props.display.nowDisplay === 'area' &&
//                     <Area />
//                 }
//                 { this.props.display.nowDisplay === 'progress' &&
//                     <Progress />
//                 }

//             </div>

//         )
//     }
// }

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