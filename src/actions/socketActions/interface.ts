import { ActionTypes } from "../types";
import { SocketUser } from "../../models";

export interface SetActiveUsersAction {
	type: ActionTypes.setActiveUsers;
	payload: SocketUser[];
}
