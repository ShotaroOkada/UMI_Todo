
import DisplayActionType from './ActionType';
import { createAction } from 'typesafe-actions';

type toProgressArgument = {
    areaName: string
}

export const toArea = createAction(DisplayActionType.TO_AREA)<undefined>();
export const toProgress = createAction(DisplayActionType.TO_PROGRESS)<toProgressArgument>();