import { PracticesState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: PracticesState = {
    drawer: [],
};

export default (
    state: PracticesState = initialState,
    action: Actions
): PracticesState => {
    switch (action.type) {
        case ActionTypes.getFinishedExercises:
            return {
                ...state,
                drawer: action.payload,
            };
            case ActionTypes.getSavedExercises:
                return {
                    ...state,
                    drawer: action.payload,
                }
        default:
            return state;
    }
};

export * from "./interface";
