import { combineReducers } from "redux";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
import exercisesReducer from "./exercisesReducer";
import userProfileReducer from "./userProfileReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
    auth: authReducer,
    filter: filterReducer,
    exercises: exercisesReducer,
    practices: userProfileReducer,
});

export * from "./authReducer";
export * from "./interface";
