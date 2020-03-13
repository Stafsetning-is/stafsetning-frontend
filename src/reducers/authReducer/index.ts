import { AuthState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: AuthState = {
	user: { name: "" },
	type: "guest"
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
	}
	return state;
};

export * from "./interface";
