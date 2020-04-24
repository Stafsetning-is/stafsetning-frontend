import { ExercisesState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: ExercisesState = {
	selection: [],
};

export default (
	state: ExercisesState = initialState,
	action: Actions
): ExercisesState => {
	switch (action.type) {
		case ActionTypes.getExerciseSample:
			return {
				...state,
				selection: action.payload,
			};
		case ActionTypes.getExercisesByUser:
			return {
				...state,
				selection: action.payload,
			};
		case ActionTypes.reloadSelection:
			return {
				...state,
				selection: [...state.selection],
			};
		case ActionTypes.starExerciseInSelection:
			const { saved, exercise } = action.payload;
			const toModify = state.selection.find((item) => item._id === exercise);
			if (toModify !== undefined) toModify.saved = saved;
			return {
				...state,
				selection: [...state.selection],
			};
		default:
			return state;
	}
};

export * from "./interface";
