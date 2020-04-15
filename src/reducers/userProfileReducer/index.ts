import { PracticesState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: PracticesState = {
    selection: [],
};

export default (
    state: PracticesState = initialState,
    action: Actions
): PracticesState => {
    switch (action.type) {
        case ActionTypes.getFinishedExercises:
            return {
                ...state,
                selection: action.payload,
            };
        default:
            return state;
    }
};

export * from "./interface";
