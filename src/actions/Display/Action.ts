import * as ActionCreators from './ActionCreator'
import { ActionType } from 'typesafe-actions'

type DisplayAction = ActionType<typeof ActionCreators>
export default DisplayAction;