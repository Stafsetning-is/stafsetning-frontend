import * as FilterActions from "../filterActions";
import * as AuthActions from "../authActions";

export enum ActionTypes {
	setMinWordCount,
	setHideCompleted,
	setMaxWordCount,
	logInUser,
	logOutUser
}

export type Actions =
	| FilterActions.SetMinWordCountAction
	| FilterActions.SetHideCompletedAction
	| FilterActions.SetMaxWordCountAction
	| AuthActions.LogInUserAction
	| AuthActions.LogOutUserAction;
