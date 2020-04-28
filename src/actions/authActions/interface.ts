import { ActionTypes } from "../types";
import { User } from "../../models";

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
