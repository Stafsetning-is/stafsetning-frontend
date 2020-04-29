import { SplitType } from "../interface";
export interface IProps {
	letter: string;
	split: SplitType;
	onSplitAdd: () => void;
	onSplitRemove: () => void;
	onAddSplitAfterChar: () => void;
}
