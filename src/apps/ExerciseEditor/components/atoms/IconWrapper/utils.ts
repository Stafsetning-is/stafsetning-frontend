import { MenuItem, FileType } from "./interface";

const CLICK_ID_SIZE = 10000000000;

// generates a random id for a click
export const getClickId = () => `${Math.abs(Math.random() * CLICK_ID_SIZE)}`;

// menu items (not implemented yet)
export const menuItems: { [key in FileType]: MenuItem[] } = {
	file: [
		{
			text: "Opna",
			action: "open",
		},
		{
			text: "Velja",
			action: "select",
		},
		{
			text: "Eyða",
			action: "delete",
		},
	],
	app: [
		{
			text: "Opna",
			action: "open",
		},
	],
};

// double click delay
export const DOUBLE_CLICK_DELAY = 150;
