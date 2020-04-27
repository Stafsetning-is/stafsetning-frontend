import { File } from "../../../../models";

export interface IProps {
	splits: number[];
	addSplit: (splitAt: number) => void;
	removeSplit: (splitAt: number) => void;
	text: string;
}
