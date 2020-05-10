import { LiveInputElementRecipe } from "../../../services";

const fontSize: LiveInputElementRecipe = {
    label: "Stærð leturs",
    placeholder: "Letur stærð",
    type: "slider",
    modified: false,
    value: "",
    passProps: {
        min: 26,
        max: 50,
        step: 2,
        marks: true
    }
};

const previewTTL: LiveInputElementRecipe = {
    label: "Lengd birtingu texta á skjá",
    placeholder: "Veldu tíma sem hentar þér",
    type: "slider",
    modified: false,
    value: "",
    passProps: {
        min: 3,
        max: 15,
        step: 1,
        marks: true
    }
};

const alwaysShowPreview: LiveInputElementRecipe = {
    label: " Texti alltaf sýndur á skjá",
    type: "check-box",
    placeholder: "",
    modified: false,
    value: false,
    passProps: null
};

const showOnScreenKeyboard: LiveInputElementRecipe = {
    label: "Lyklaborð sýnt á skjá",
    type: "check-box",
    placeholder: "",
    modified: false,
    value: false,
    passProps: null
};

const textBackground: LiveInputElementRecipe = {
    label: "Bakgrunnslitur æfingar",
    type: "color-picker",
    placeholder: "",
    modified: false,
    value: "#F8F8F8",
    passProps: {
        colors: [
            "#F8F8F8",
            "#96ADFC",
            "#DBE1F1",
            "#A8F29A",
            "#D8D3D6",
            "#EDDD6E",
            "#EDD1B0",
            "#B987DC",
            "#E0A6AA",
            "#A5F7E1"
        ]
    }
};

export const changeUserPreferenceForm = {
    fontSize,
    previewTTL,
    alwaysShowPreview,
    showOnScreenKeyboard,
    textBackground
};
