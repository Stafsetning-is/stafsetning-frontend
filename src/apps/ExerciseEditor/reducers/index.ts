import { combineReducers } from "redux";
import EditorReducer from "./editorReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
	editor: EditorReducer,
});

export * from "./interface";
