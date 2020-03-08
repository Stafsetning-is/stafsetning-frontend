import * as FilterActions from "../filterActions";
export enum ActionTypes {
    setMinWordCount,
    setHideCompleted
}

export type Actions =
    | FilterActions.SetMinWordCountAction
    | FilterActions.SetHideCompletedAction;
