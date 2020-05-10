import { ActionTypes } from "../types";
import { UserPreference, User } from "../../models";

export interface LogInUserAction {
    type: ActionTypes.logInUser;
    payload: User;
}

export interface LogOutUserAction {
    type: ActionTypes.logOutUser;
    payload: null;
}

export interface FetchAdminInvitesAction {
    type: ActionTypes.fetchAdminInvites;
    payload: User[];
}

export interface RequestAdminStatusForUserAction {
    type: ActionTypes.requestAdminStatusForUser;
    payload: string;
}

export interface ChangePendingAdminInviteToLoadingAction {
    type: ActionTypes.changePendingAdminInviteToLoading;
    payload: string;
}
export interface ChangeUserPointsAction {
    type: ActionTypes.changeUserPoints;
    payload: number;
}

export interface ChangeUserPreferencesAction {
    type: ActionTypes.changeUserPreferences;
    payload: UserPreference;
}

export interface ChangeUserDifficulltyAction {
    type: ActionTypes.changeUserDifficulty;
    payload: number;
}

// export interface ChangeUserPasswordAction {
//     type: ActionTypes.changeUserPassword;
//     payload: string;
// }

export interface SetGenderAction {
    type: ActionTypes.setGender;
    payload?: "male" | "female" | "loading";
}
