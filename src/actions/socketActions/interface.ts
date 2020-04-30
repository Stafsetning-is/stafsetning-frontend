import { ActionTypes } from "../types";
import { SocketUser, Trophy } from "../../models";

export interface SetActiveUsersAction {
	type: ActionTypes.setActiveUsers;
	payload: SocketUser[];
}

export interface CloseSocketModalAction {
	type: ActionTypes.closeTrophyModal;
	payload: null;
}

export interface HandleNewTrophy {
	type: ActionTypes.handleNewTrophy;
	payload: Trophy;
}
