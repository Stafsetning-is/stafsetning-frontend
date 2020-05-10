import * as FilterActions from "../filterActions";
import * as AuthActions from "../authActions";
import * as ExercisesActions from "../exercisesActions";
import * as UserProfileActions from "../userProfileActions";
import * as SocketActions from "../socketActions";
import * as TutorialActions from "../tutorialActions";

/**
 * Action types are kept in an enumeration object
 *
 * to create a new action follow the following steps
 *
 *     1. add an ActionType to the enum with camel case
 *     2. create an interface in the correct Actions folder
 *            with PascalCase and ending with "Action"
 *            e.g. DoSomethingNowAction
 *     3. create the action creator in the index file resident
 *            in same directory as the interface
 *     4. add the new action creator to the below Actions union
 *
 * If the above steps are not completed you will (correctly)
 * get a type error when trying to add the action type to the reducer
 */

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
    setActiveUsers,
    getSavedExercises,
    setOpenDrawer,
    changeUserPoints,
    closeTrophyModal,
    handleNewTrophy,
    fetchTrophies,
    changeUserPreferences,
    changeUserDifficulty,
    setGender,
    queueTutorialItems,
    shrinkTutorial,
    continueTutorialDialog,
    dequeueTutorialQueue,
    removeDialogsByLocation,
    growTutorial,
    removeDialogByType,
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
    | AuthActions.FetchAdminInvitesAction
    | AuthActions.RequestAdminStatusForUserAction
    | AuthActions.ChangePendingAdminInviteToLoadingAction
    | UserProfileActions.GetSavedExercisesAction
    | UserProfileActions.SetOpenDrawerAction
    | AuthActions.ChangePendingAdminInviteToLoadingAction
    | SocketActions.SetActiveUsersAction
    | AuthActions.ChangeUserPointsAction
    | SocketActions.CloseSocketModalAction
    | SocketActions.HandleNewTrophy
    | UserProfileActions.FetchTrophiesAction
    | AuthActions.ChangeUserPreferencesAction
    | AuthActions.ChangeUserDifficulltyAction
    | AuthActions.SetGenderAction
    | TutorialActions.QueueTutorialItemsAction
    | TutorialActions.ShrinkTutorialAction
    | TutorialActions.DequeDialogQueueAction
    | TutorialActions.ContinueTutorialDialogAction
    | TutorialActions.RemoveDialogsByLocationAction
    | TutorialActions.GrowTutorialAction
    | TutorialActions.RemoveDialogByTypeAction;
