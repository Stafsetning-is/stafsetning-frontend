import { AuthState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";
import { EMPTY_USER } from "./utils";
export const initialState: AuthState = {
	user: EMPTY_USER,
	type: "unknown",
};

export default (
	state: AuthState = initialState,
	action: Actions
): AuthState => {
	switch (action.type) {
		case ActionTypes.logInUser:
			const user = action.payload;
			return {
				...state,
				type: user.type,
				user: user,
			};
		case ActionTypes.logOutUser:
			return { ...initialState, type: "guest" };
	}
	return state;
};

export * from "./interface";
