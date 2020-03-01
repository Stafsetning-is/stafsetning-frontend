import { AuthState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: AuthState = {
	showAuthModal: false
};

export default (
	state: AuthState = initialState,
	action: Actions
): AuthState => {
	switch (action.type) {
		case ActionTypes.closeAuthModal:
			return { ...state, showAuthModal: false };
		case ActionTypes.openAuthModal:
			return { ...state, showAuthModal: true };
		default:
			return state;
	}
};

export * from "./interface";
