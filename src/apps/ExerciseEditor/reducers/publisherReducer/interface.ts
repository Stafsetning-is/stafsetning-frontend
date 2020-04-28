import { File } from "../../models";

export interface PublisherState {
	file: File | null;
	splits: number[];
	startRange?: number;
	endRange?: number;
	completedFileId?: string;
}
