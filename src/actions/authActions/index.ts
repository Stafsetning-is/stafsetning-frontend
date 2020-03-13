import { ActionTypes } from "../types";
import { User } from "../../models";

export function logInUser(user: User) {
	return {
		type: ActionTypes.logInUser,
		payload: user
	};
}

export * from "./interface";
