import * as React from 'react'
import { progressNames } from 'src/states/Progress';
import Progress from './Progress';

export default function ProgressArea() {
    return(
    <>
    {progressNames.map((progressName, progressNameIndex) => {
        return <Progress key={progressName} progressName={progressName} progressNameIndex={progressNameIndex} />
      })}
    </>
    )
}