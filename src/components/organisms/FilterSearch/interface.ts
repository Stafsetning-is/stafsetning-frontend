import { FilterObject, QuickFilter } from "../../../services";

export interface IProps extends FilterObject {
	setHideCompleted: (shouldHide: boolean) => void;
	setMaxWordCount: (newValue: number) => void;
	setMinWordCount: (newValue: number) => void;
	setQuickFilter: (filter: QuickFilter) => void;
}

export interface FilterButton {
	quickFilter: QuickFilter;
	label: string;
}
