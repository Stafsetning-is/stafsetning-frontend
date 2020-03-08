import { combineReducers } from "redux";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
	auth: authReducer,
	filter: filterReducer
});

export * from "./authReducer";
export * from "./interface";
