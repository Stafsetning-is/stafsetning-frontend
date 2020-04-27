import { DesktopState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: DesktopState = {
	files: [],
	doneFetching: false,
	selected: [],
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
		case ActionTypes.selectFile:
			return {
				...state,
				selected: [...state.selected, action.payload],
			};
		case ActionTypes.selectSingleFile:
			console.log("h4", 4);
			return {
				...state,
				selected: [action.payload],
			};
		default:
			return { ...state };
	}
};

export * from "./interface";
