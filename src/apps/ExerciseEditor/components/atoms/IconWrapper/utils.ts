import { MenuItem, FileType } from "./interface";

export const getClickId = () => `${Math.abs(Math.random() * 10000000000)}`;

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
