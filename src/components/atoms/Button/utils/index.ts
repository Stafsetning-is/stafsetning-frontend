import { ButtonTypes } from "../interface";
/*The getTheme changes the state of the button
The default case is the purple color used in the logo
The danger case is a hot red used in the error button
The secondary case is for the green button used in practice 'birta'
*/
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
                color: "#666",
            };
    }
};
