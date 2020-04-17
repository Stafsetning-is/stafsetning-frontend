import { combineReducers } from "redux";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
import exercisesReducer from "./exercisesReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
	auth: authReducer,
	filter: filterReducer,
	exercises: exercisesReducer
});

export * from "./authReducer";
export * from "./interface";
