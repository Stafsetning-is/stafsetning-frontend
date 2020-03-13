import { ActionTypes } from "../types";
import { User } from "../../models";
import { Dispatch } from "redux";
import { LogInUserAction, LogOutUserAction } from "./interface";
import { Api } from "../../api";

export function logInUser(user: User) {
	return {
		type: ActionTypes.logInUser,
		payload: user
	};
}

/**
 * Fetched the user info from token
 * this should be used on application
 * start
 */
export function fetchUserFromToken() {
	return async function(dispatch: Dispatch) {
		try {
			const { data } = await Api.get<User>("/api/v1/users/auth");
			dispatch<LogInUserAction>({
				type: ActionTypes.logInUser,
				payload: data
			});
		} catch (error) {
			dispatch<LogOutUserAction>({
				type: ActionTypes.logOutUser,
				payload: null
			});
		}
	};
}

export * from "./interface";
