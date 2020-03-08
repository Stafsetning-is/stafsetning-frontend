import * as FilterActions from "../filterActions";
export enum ActionTypes {
	setMinWordCount,
	setHideCompleted,
	setMaxWordCount
}

export type Actions =
	| FilterActions.SetMinWordCountAction
	| FilterActions.SetHideCompletedAction
	| FilterActions.SetMaxWordCountAction;
