import { AuthState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: AuthState = {
	user: { name: "Nanna Sighvatsdottir" },
	type: "admin"
};

export default (
	state: AuthState = initialState,
	action: Actions
): AuthState => {
	return state;
};

export * from "./interface";
