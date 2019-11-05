import { createStandardAction } from 'typesafe-actions/dist/deprecated/create-standard-action';
import DisplayActionType from './ActionType';

export const toArea = createStandardAction(DisplayActionType.TO_AREA)<undefined>();
export const toProgress = createStandardAction(DisplayActionType.TO_PROGRESS)<undefined>();