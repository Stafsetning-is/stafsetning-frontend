import { ActionTypes } from "../types";
import { User, UserPreference } from "../../models";
import { Dispatch } from "redux";
import {
	LogInUserAction,
	LogOutUserAction,
	FetchAdminInvitesAction,
	ChangePendingAdminInviteToLoadingAction,
	RequestAdminStatusForUserAction,
	ChangeUserPointsAction,
	ChangeUserPreferencesAction,
	ChangeUserDifficulltyAction,
	SetGenderAction,
} from "./interface";
import { Api } from "../../api";
import { emitLogin } from "../";
import { removeToken } from "../../services";

/**
 * logs the user in and emits the login
 * @param user
 */
export function logInUser(user: User): LogInUserAction {
	emitLogin(user._id);
	return {
		type: ActionTypes.logInUser,
		payload: user,
	};
}

/**
 * Fetched the user info from token
 * this should be used on application
 * start
 */
export function fetchUserFromToken() {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<User>("/api/v1/users/auth");
			dispatch<LogInUserAction>(logInUser(data));
		} catch (error) {
			dispatch<LogOutUserAction>({
				type: ActionTypes.logOutUser,
				payload: null,
			});
		}
	};
}

/**
 * changes an user with "admin-invite-pending" to "loading"
 * while the request has not responded
 * @param id users id
 */
export function changePendingAdminInviteToLoading(
	id: string
): ChangePendingAdminInviteToLoadingAction {
	return {
		type: ActionTypes.changePendingAdminInviteToLoading,
		payload: id,
	};
}

/**
 * Request admin status for user
 */
export function requestAdminStatusForUser(id: string) {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<ChangePendingAdminInviteToLoadingAction>({
				type: ActionTypes.changePendingAdminInviteToLoading,
				payload: id,
			});
			await Api.post<void>(`/api/admin/users/${id}/make_admin`);
			dispatch<RequestAdminStatusForUserAction>({
				type: ActionTypes.requestAdminStatusForUser,
				payload: id,
			});
		} catch (error) {
			console.log("requestAdminStatusForUser", error);
		}
	};
}

/**
 * fetches pending admin invites from backend
 */

export function fetchAdminInviteList() {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<User[]>(
				"/api/admin/users/invite_list/"
			);
			dispatch<FetchAdminInvitesAction>({
				type: ActionTypes.fetchAdminInvites,
				payload: data,
			});
		} catch (error) {
			// error during fetching
		}
	};
}

export function signOut(): LogOutUserAction {
	removeToken();
	return {
		type: ActionTypes.logOutUser,
		payload: null,
	};
}

export function changeUserPoints(points: number): ChangeUserPointsAction {
	return {
		type: ActionTypes.changeUserPoints,
		payload: points,
	};
}

export function changeUserPreferences(
	preferences: UserPreference
): ChangeUserPreferencesAction {
	return {
		type: ActionTypes.changeUserPreferences,
		payload: preferences,
	};
}

export function changeUserDifficulty(
	value: number
): ChangeUserDifficulltyAction {
	return {
		type: ActionTypes.changeUserDifficulty,
		payload: value,
	};
}

export function changeUserGender(gender: "male" | "female") {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetGenderAction>({
				payload: "loading",
				type: ActionTypes.setGender,
			});
			const { data } = await Api.post<User>("/api/v1/users/gender", {
				gender,
			});
			dispatch<LogInUserAction>({
				payload: data,
				type: ActionTypes.logInUser,
			});
		} catch (error) {
			// setting gender failed
		}
	};
}

export function openPickGenderView(): SetGenderAction {
	return {
		type: ActionTypes.setGender,
	};
}

export * from "./interface";
