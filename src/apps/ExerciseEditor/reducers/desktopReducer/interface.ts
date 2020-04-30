import { File } from "../../models";

export interface DesktopState {
	files: File[];
	doneFetching: boolean;
	selected: string[];
}
