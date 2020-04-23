import { QuickFilter } from "../../../../services";

export interface IProps {
	onClick: (filter: QuickFilter) => void;
	selected: boolean;
	text: string;
	quickFilter: QuickFilter;
}
