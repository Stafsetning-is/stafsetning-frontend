import { ActionTypes } from "../types";
import { User } from "../../models";

export interface LogInUserAction {
	type: ActionTypes.logInUser;
	payload: User;
}
