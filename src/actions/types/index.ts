import * as FilterActions from "../filterActions";
import * as AuthActions from "../authActions";
import * as ExercisesActions from "../exercisesActions";

export enum ActionTypes {
	setMinWordCount,
	setHideCompleted,
	setMaxWordCount,
	logInUser,
	logOutUser,
	getExerciseSample,
	getExercisesByUser
}

export type Actions =
	| FilterActions.SetMinWordCountAction
	| FilterActions.SetHideCompletedAction
	| FilterActions.SetMaxWordCountAction
	| AuthActions.LogInUserAction
	| AuthActions.LogOutUserAction
	| ExercisesActions.GetExerciseSampleAction
	| ExercisesActions.GetExercisesByUserAction;
