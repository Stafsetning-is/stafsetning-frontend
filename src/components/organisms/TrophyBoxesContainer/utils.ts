import { Trophy } from "../../../models";

export const ITEM_IN_ROWS = 5;
export const ROWS = 5;

const lockedTrophy: Trophy = {
	icon: "faLock",
	title: "Læst",
	locked: true,
	description: "Þú hefur ekki fengið þessi verðlaun enn.",
};

export const LOCKED_TROPHIES = new Array(ITEM_IN_ROWS * ROWS).fill(
	lockedTrophy
);
