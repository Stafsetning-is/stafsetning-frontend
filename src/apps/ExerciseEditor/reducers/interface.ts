import { EditorState } from "./editorReducer";
import { DesktopState } from "./desktopReducer";

export interface StoreState {
	editor: EditorState;
	desktop: DesktopState;
}
