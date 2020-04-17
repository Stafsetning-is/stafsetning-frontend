import { ButtonTypes } from "../interface";
export const getTheme = (type: ButtonTypes) => {
	switch (type) {
		case "default":
			return { bg: "#6600FF" };
		case "danger":
			return { bg: "#FF0066" };
		case "secondary":
			return {
				border: "#00FFAA 2px solid",
				bg: "rgba(0,0,0,0)",
				color: "#666"
			};
	}
};
