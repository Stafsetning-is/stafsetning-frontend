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

export { default as User } from "../../models";
