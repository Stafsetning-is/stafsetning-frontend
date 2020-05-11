import { Trophy } from "../../../models";

export const ITEM_IN_ROWS = 5;
export const ROWS = 5;

/**
 * The trophies users have not acquired yet (each trophy)
 */
const lockedTrophy: Trophy = {
	icon: "faLock",
	title: "Læst",
	locked: true,
	description: "Þú hefur ekki fengið þessi verðlaun enn.",
};
/**
 * The array of all the locked trophies
 */
export const LOCKED_TROPHIES = new Array(ITEM_IN_ROWS * ROWS).fill(
    lockedTrophy
);
