import { createMuiTheme } from "@material-ui/core/styles";
/*
describes the outlook of the double slider
*/
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
