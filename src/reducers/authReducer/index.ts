import { AuthState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";
import { EMPTY_USER } from "./utils";

export const initialState: AuthState = {
	user: EMPTY_USER,
	type: "unknown",
	pendingAdminInvite: [],
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
		case ActionTypes.changePendingAdminInviteToLoading:
			const found = state.pendingAdminInvite.find(
				(item) => item._id === action.payload
			);
			if (found) found.type = "loading";
			return {
				...state,
				pendingAdminInvite: [...state.pendingAdminInvite],
			};
		case ActionTypes.fetchAdminInvites:
			return {
				...state,
				pendingAdminInvite: [...action.payload],
			};
		case ActionTypes.requestAdminStatusForUser:
			return {
				...state,
				pendingAdminInvite: state.pendingAdminInvite.filter(
					(item) => item._id !== action.payload
				),
			};
		case ActionTypes.changeUserPoints:
			return {
				...state,
				user: {
					...state.user,
					points: action.payload,
				},
			};
		case ActionTypes.logOutUser:
			return { ...initialState, type: "guest" };
	}
	return state;
};

export * from "./interface";
