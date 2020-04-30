import { UserProfileState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: UserProfileState = {
    saved: [],
    finished: [],
    openDrawer: "finished",
    difficulty: 1
};

export default (
    state: UserProfileState = initialState,
    action: Actions
): UserProfileState => {
    switch (action.type) {
        case ActionTypes.getFinishedExercises:
            return {
                ...state,
                finished: action.payload
            };
        case ActionTypes.getSavedExercises:
            return {
                ...state,
                saved: action.payload
            };
        case ActionTypes.setOpenDrawer:
            return {
                ...state,
                openDrawer: action.payload
            };
        case ActionTypes.changeDifficulty:
            return {
                ...state,
                difficulty: action.payload
            };
        default:
            return state;
    }
};

export * from "./interface";
