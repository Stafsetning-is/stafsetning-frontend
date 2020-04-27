import { combineReducers } from "redux";
import EditorReducer from "./editorReducer";
import DesktopReducer from "./desktopReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
	editor: EditorReducer,
	desktop: DesktopReducer,
});

export * from "./interface";
