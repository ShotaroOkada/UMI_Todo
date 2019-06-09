import * as React from 'react';
import IDisplay from 'src/states/Display';
import Area from 'src/containers/Area';
import Progress from 'src/containers/Progress';


export interface IAppConnectProps {
    display: IDisplay
}

export default class App extends React.Component<IAppConnectProps> {
    public render() {
        return(
            <div style={{height: '100%'}}>
                { this.props.display.nowDisplay === 'area' &&
                    <Area />
                }
                { this.props.display.nowDisplay === 'progress' &&
                    <Progress />
                }
                
            </div>
            
        )
    }
}