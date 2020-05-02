import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	overrides: {
		MuiSlider: {
			thumb: {
				color: "#6600ff",
			},
			track: {
				color: "#6600ff",
			},
			rail: {
				color: "black",
			},
		},
	},
});
