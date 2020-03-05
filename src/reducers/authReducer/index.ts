import { AuthState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: AuthState = {};

export default (
	state: AuthState = initialState,
	action: Actions
): AuthState => {
	return state;
};

export * from "./interface";
