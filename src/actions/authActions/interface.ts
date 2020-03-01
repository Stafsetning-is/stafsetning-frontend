import { ActionTypes } from "../types";

export interface OpenAuthModalAction {
	type: ActionTypes.openAuthModal;
	payload: null;
}

export interface CloseAuthModalAction {
	type: ActionTypes.closeAuthModal;
	payload: null;
}
