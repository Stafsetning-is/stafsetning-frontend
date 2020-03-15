import { FilterState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: FilterState = {
	minWordCount: 0,
	hideCompleted: false,
	maxWordCount: 1000
};

export default (
	state: FilterState = initialState,
	action: Actions
): FilterState => {
	switch (action.type) {
		case ActionTypes.setMinWordCount:
			return {
				...state,
				minWordCount: action.payload
			};
		case ActionTypes.setHideCompleted:
			return {
				...state,
				hideCompleted: action.payload
			};
		case ActionTypes.setMaxWordCount:
			return {
				...state,
				maxWordCount: action.payload
			};
		default:
			return state;
	}
};

export * from "./interface";
