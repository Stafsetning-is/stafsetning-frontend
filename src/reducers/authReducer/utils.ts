import { User } from "../../models";

export const EMPTY_USER: User = {
	name: "",
	avatar: "",
	type: "unknown",
	_id: "",
	points: 0,
	difficulty: 0,
	gender: "male",
	preferences: {
		fontSize: 0,
		previewTTL: 0,
		alwaysShowPreview: false,
		showOnScreenKeyboard: false,
		textBackground: "#F8F8F8",
	},
	avatars: {
		male: "",
		female: "",
	},
};
