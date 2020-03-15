import { AuthState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";
import { EMPTY_USER } from "./utils";
export const initialState: AuthState = {
	user: EMPTY_USER,
	type: "unknown"
};

export default (
	state: AuthState = initialState,
	action: Actions
): AuthState => {
	switch (action.type) {
		case ActionTypes.logInUser:
			return {
				...state,
				type: "user",
				user: action.payload
			};
		case ActionTypes.logOutUser:
			return initialState;
	}
	return state;
};

export * from "./interface";
