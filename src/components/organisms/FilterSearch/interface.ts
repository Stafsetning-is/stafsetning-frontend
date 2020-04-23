import { FilterObject, QuickFilter } from "../../../services";

export interface IProps extends FilterObject {}

export interface FilterButton {
	quickFilter: QuickFilter;
	label: string;
}
