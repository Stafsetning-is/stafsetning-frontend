import { File } from "../../../models";

export interface IProps {
	file: File;
	splits: number[];
	startRange?: number;
	endRange?: number;
	completePublish: (id: string) => void;
}

export type SplitType = "none" | "closed-split" | "not-closed";
