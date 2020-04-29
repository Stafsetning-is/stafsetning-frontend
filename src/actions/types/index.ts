import * as FilterActions from "../filterActions";
import * as AuthActions from "../authActions";
import * as ExercisesActions from "../exercisesActions";
import * as UserProfileActions from "../userProfileActions";

export enum ActionTypes {
	setMinWordCount,
	setHideCompleted,
	setMaxWordCount,
	logInUser,
	logOutUser,
	getExerciseSample,
	getExercisesByUser,
	getFinishedExercises,
	addGrammarRuleToFilter,
	removeGrammarRuleFromFilter,
	setQuickFilter,
	closeFilterSideBar,
	openFilterSideBar,
	reloadSelection,
	starExerciseInSelection,
	fetchSavedExercises,
	fetchAdminInvites,
	requestAdminStatusForUser,
	changePendingAdminInviteToLoading,
}

export type Actions =
	| FilterActions.SetMinWordCountAction
	| FilterActions.SetHideCompletedAction
	| FilterActions.SetMaxWordCountAction
	| AuthActions.LogInUserAction
	| AuthActions.LogOutUserAction
	| ExercisesActions.GetExerciseSampleAction
	| ExercisesActions.GetExercisesByUserAction
	| UserProfileActions.GetFinishedExercisesAction
	| FilterActions.AddRuleToGrammarFilterAction
	| FilterActions.RemoveGrammarRuleFromFilterAction
	| FilterActions.SetQuickFilterAction
	| FilterActions.CloseFilterAction
	| FilterActions.OpenFilterAction
	| ExercisesActions.ReloadSelectionAction
	| ExercisesActions.StarExerciseInSelectionAction
	| ExercisesActions.FetchSavedExercisesAction
	| AuthActions.FetchAdminInvitesAction
	| AuthActions.RequestAdminStatusForUserAction
	| AuthActions.ChangePendingAdminInviteToLoadingAction;
