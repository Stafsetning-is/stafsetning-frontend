import { FilterButton } from "./interface";

export const SLIDER_PROPS = {
	defaultValues: {
		min: 0,
		max: 200,
	},
	passProps: {},
	label: "Lengd á æfingu",
};

export const FILTER_BUTTONS: FilterButton[] = [
	{
		label: "Fela þær sem ég er búinn með",
		quickFilter: "hide-completed",
	},
];
