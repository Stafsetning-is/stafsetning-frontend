import { DesktopState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: DesktopState = {
	files: [],
	doneFetching: false,
};

export default (
	state: DesktopState = initialState,
	action: Actions
): DesktopState => {
	switch (action.type) {
		case ActionTypes.fetchFiles:
			return {
				...state,
				doneFetching: true,
				files: action.payload,
			};
		default:
			return { ...state };
	}
};

export * from "./interface";
