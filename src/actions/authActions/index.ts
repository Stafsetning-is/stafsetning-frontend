import { OpenAuthModalAction, CloseAuthModalAction } from "./interface";
import { ActionTypes } from "../types";
import { Dispatch } from "redux";

export function openAuthModal() {
	console.log("hi");
	return {
		type: ActionTypes.openAuthModal,
		payload: null
	};
}

export function closeAuthModal(dispatch: Dispatch) {
	dispatch<CloseAuthModalAction>({
		type: ActionTypes.closeAuthModal,
		payload: null
	});
}

export * from "./interface";
