import { PublisherState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: PublisherState = {
	splits: [],
	file: null,
};

export default (
	state: PublisherState = initialState,
	action: Actions
): PublisherState => {
	switch (action.type) {
		case ActionTypes.openFileInPublisher:
			return {
				...state,
				file: action.payload,
				splits: [0],
			};
		case ActionTypes.addSplit:
			const splitArray = [...state.splits];
			if (splitArray.indexOf(action.payload) > -1) return { ...state };
			splitArray.sort((a, b) => a - b);
			return {
				...state,
				splits: [...splitArray, action.payload],
			};
		case ActionTypes.removeSplit:
			const { splits } = state;
			const index = state.splits.indexOf(action.payload);
			splits.splice(index, 1);
			return {
				...state,
				splits: [...splits],
			};
		case ActionTypes.setStartRage:
			return {
				...state,
				startRange: action.payload,
			};
		case ActionTypes.setEndRange:
			return {
				...state,
				endRange: action.payload,
			};
		case ActionTypes.completePublish:
			return {
				...state,
				completedFileId: action.payload,
			};
		default:
			return { ...state };
	}
};

export * from "./interface";
