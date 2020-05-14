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
import { emitLogin, clearFilter } from "../";
import { removeToken } from "../../services";
import store from "../../store";

/**
 * AUTH ACTIONS
 *
 * Here are all actions that change or maniuplate
 * the auth state in the auth reducer. These actions
 * mainly deal with the authentication part
 * of the application as well as the state
 * of the currently logged in user, or other
 * users that are stored for various purposes
 *
 * example of other user data are
 *     - list of users pending admin approval
 *
 * These actions are
 *     - logInUser
 *     - fetchUserFromToken
 *     - changePendingAdminInviteToLoading
 *     - requestAdminStatusForUser
 *     - fetchAdminInviteList
 *     - signOut
 *     - changeUserPoints
 *     - changeUserPreferences
 *     - changeUserDifficulty
 *     - changeUserGender
 *     - openPickGenderView
 *
 */

/**
 * logs the user
 * @param user conforms to user interface
 */
export function logInUser(user: User): LogInUserAction {
	// emits log in via socket
	emitLogin(user._id);
	// returns LogInUserAction
	return {
		type: ActionTypes.logInUser,
		payload: user,
	};
}

/**
 * fetches the user from the api
 * by checking the token in cookies
 * if the token is not valid
 * then we dispatch a LogOutUserAction
 * else we log him in
 */
export function fetchUserFromToken() {
	return async function (dispatch: Dispatch) {
		try {
			// we call the /users/auth route
			// Api handles the cookies
			// throws 401 if no session
			const { data } = await Api.get<User>("/api/v1/users/auth");
			dispatch<LogInUserAction>(logInUser(data));
		} catch (error) {
			// if 401 is thrown then user
			// should not be logged in
			dispatch<LogOutUserAction>({
				type: ActionTypes.logOutUser,
				payload: null,
			});
		}
	};
}

/**
 * changes an user with "admin-invite-pending" to "loading"
 * while the request has not given an answer
 * @param id users id
 */
export function changePendingAdminInviteToLoading(
	id: string
): ChangePendingAdminInviteToLoadingAction {
	// returns the action
	return {
		type: ActionTypes.changePendingAdminInviteToLoading,
		payload: id,
	};
}

/**
 * An async action creater that requests admin
 * status for another user.
 * @param id the user to make admin
 */
export function requestAdminStatusForUser(id: string) {
	// return async action
	return async function (dispatch: Dispatch) {
		try {
			// start by changing the user status to loading
			dispatch<ChangePendingAdminInviteToLoadingAction>({
				type: ActionTypes.changePendingAdminInviteToLoading,
				payload: id,
			});
			// send the request
			await Api.post<void>(`/api/admin/users/${id}/make_admin`);
			// if it works then we dispatch to redux
			dispatch<RequestAdminStatusForUserAction>({
				type: ActionTypes.requestAdminStatusForUser,
				payload: id,
			});
		} catch (error) {
			// do nothing on error
		}
	};
}

/**
 * Async action creater that fetches
 * the invite list for users requesting
 * admin priveledges
 */
export function fetchAdminInviteList() {
	// returns async action creator
	return async function (dispatch: Dispatch) {
		try {
			// calls the route
			const { data } = await Api.get<User[]>(
				"/api/admin/users/invite_list/"
			);
			// dispatch .fetchAdminInvites if route works
			dispatch<FetchAdminInvitesAction>({
				type: ActionTypes.fetchAdminInvites,
				payload: data,
			});
		} catch (error) {
			// do nothing if error
		}
	};
}

/**
 * sync action creator that logs user
 * out
 */
export function signOut(): LogOutUserAction {
	// removes the token
	removeToken();
	// cleans filter settings
	store.dispatch(clearFilter());
	// returns the action creator
	return {
		type: ActionTypes.logOutUser,
		payload: null,
	};
}

/**
 * updates the points of the user that is
 * logged in
 * @param points new point value
 */
export function changeUserPoints(points: number): ChangeUserPointsAction {
	// returns the action creator
	return {
		type: ActionTypes.changeUserPoints,
		payload: points,
	};
}

/**
 * updates user preferences in the store
 * @param preferences UserPreference interface object
 */
export function changeUserPreferences(
	preferences: UserPreference
): ChangeUserPreferencesAction {
	// returns the action creator
	return {
		type: ActionTypes.changeUserPreferences,
		payload: preferences,
	};
}

/**
 * changes the user difficulty in the store
 * @param value new number between 1-11
 */
export function changeUserDifficulty(
	value: number
): ChangeUserDifficulltyAction {
	// returns the action
	return {
		type: ActionTypes.changeUserDifficulty,
		payload: value,
	};
}

/**
 * async action creator that changes user gender
 * in the api and updates store
 * @param gender must be 'male' or 'female'
 */
export function changeUserGender(gender: "male" | "female") {
	// returns async action creator
	return async function (dispatch: Dispatch) {
		try {
			// sets gender type to 'loading'
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

/**
 * Sets open gender view as open
 */
export function openPickGenderView(): SetGenderAction {
	// returns the action
	return {
		type: ActionTypes.setGender,
	};
}

export * from "./interface";
