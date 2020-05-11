import { FilterButton } from "./interface";
/**
 * The options whithin the slider. The slider allows a minimum
 * and 0 words and a maximum of 200 words in an exercise
 */
export const SLIDER_PROPS = {
    defaultValues: {
        min: 0,
        max: 200
    },
    passProps: {},
    label: ""
};
/**
 * The filter options allows only one of these
 * options to be chosen at a given time
 */
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
