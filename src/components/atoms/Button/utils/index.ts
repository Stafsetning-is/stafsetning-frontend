import { ButtonTypes } from "../interface";
export const getTheme = (type: ButtonTypes) => {
	switch (type) {
		case "default":
			return { bg: "#6600FF" };
		case "danger":
			return { bg: "#FF0066" };
		case "white":
			return {
				bg: "#e8e8e8",
				border: "#666 2px solid",
				color: "#4e4e4e",
			};
		case "secondary":
			return {
				border: "#00FFAA 2px solid",
				bg: "rgba(0,0,0,0)",
				color: "#666",
			};
	}
};
