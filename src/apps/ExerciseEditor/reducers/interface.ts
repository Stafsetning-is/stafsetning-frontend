import { EditorState } from "./editorReducer";
import { DesktopState } from "./desktopReducer";
import { PublisherState } from "./publisherReducer";

export interface StoreState {
	editor: EditorState;
	desktop: DesktopState;
	publisher: PublisherState;
}
