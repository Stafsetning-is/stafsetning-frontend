import { FilterButton } from "./interface";

export const SLIDER_PROPS = {
	defaultValues: {
		min: 0,
		max: 200,
	},
	passProps: {},
	label: "",
};

export const FILTER_BUTTONS: FilterButton[] = [
	{
		label: "ókláraðar æfingar",
		quickFilter: "hide-completed",
	},
	{
		label: "vistaðar æfingar",
		quickFilter: "show-saved",
	},
];
