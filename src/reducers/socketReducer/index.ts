import { SocketState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: SocketState = {
	connectedUsers: [],
};

export default (
	state: SocketState = initialState,
	action: Actions
): SocketState => {
	switch (action.type) {
		case ActionTypes.setActiveUsers:
			return {
				...state,
				connectedUsers: action.payload,
			};
		default:
			return state;
	}
};

export * from "./interface";
