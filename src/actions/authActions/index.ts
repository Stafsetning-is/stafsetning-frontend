import { ActionTypes } from "../types";

/**
 * Opens sign in modals
 */
export function openAuthModal() {
	return {
		type: ActionTypes.openAuthModal,
		payload: null
	};
}

/**
 * Closes sign in modals
 */
export function closeAuthModal() {
	return {
		type: ActionTypes.closeAuthModal,
		payload: null
	};
}

export * from "./interface";
