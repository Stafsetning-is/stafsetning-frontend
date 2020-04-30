import { combineReducers } from "redux";
import EditorReducer from "./editorReducer";
import DesktopReducer from "./desktopReducer";
import PublisherReducer from "./publisherReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
	editor: EditorReducer,
	desktop: DesktopReducer,
	publisher: PublisherReducer,
});

export * from "./interface";
