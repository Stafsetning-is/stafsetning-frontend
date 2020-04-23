import { QuickFilter } from "../../../services";

export interface IProps {
	setHideCompleted: (shouldHide: boolean) => void;
	setMaxWordCount: (newValue: number) => void;
	setMinWordCount: (newValue: number) => void;
	setQuickFilter: (filter: QuickFilter) => void;
	minWordCount: number;
	maxWordCount: number;
	hideCompleted: boolean;
	quickFilter: QuickFilter;
}

export interface FilterButton {
	quickFilter: QuickFilter;
	label: string;
}
