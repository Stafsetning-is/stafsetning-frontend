import { ExercisesState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: ExercisesState = {
	selection: []
};

export default (
	state: ExercisesState = initialState,
	action: Actions
): ExercisesState => {
	switch (action.type) {
		case ActionTypes.getExerciseSample:
			return {
				...state,
				selection: action.payload
			};
		default:
			return state;
	}
};

export * from "./interface";
