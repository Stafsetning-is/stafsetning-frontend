import { TutorialState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";
import { TutorialLocations } from "../../services";
import { filterPracticeState } from "./utils";

export const initialState: TutorialState = {
	current: undefined,
	queue: [],
	placement: TutorialLocations.frontPage,
	fullScreen: false,
};

export default (
	state: TutorialState = initialState,
	action: Actions
): TutorialState => {
	switch (action.type) {
		case ActionTypes.queueTutorialItems:
			if (state.current === undefined) {
				return {
					...state,
					current: action.payload.shift(),
					queue: action.payload,
				};
			} else {
				return {
					...state,
					queue: action.payload,
				};
			}
		case ActionTypes.shrinkTutorial:
			return {
				...state,
				fullScreen: false,
			};
		case ActionTypes.growTutorial:
			return {
				...state,
				fullScreen: true,
			};
		case ActionTypes.continueTutorialDialog:
			return {
				...state,
				current: undefined,
			};
		case ActionTypes.dequeueTutorialQueue:
			if (state.current) return state;
			const current = state.queue.shift();
			return {
				...state,
				current,
				queue: [...state.queue],
			};
		case ActionTypes.removeDialogsByLocation:
			return filterPracticeState(
				state,
				(item) => item.location !== action.payload
			);
		case ActionTypes.removeDialogByType:
			return filterPracticeState(
				state,
				(item) => item.type !== action.payload
			);
		default:
			return state;
	}
};

export * from "./interface";
