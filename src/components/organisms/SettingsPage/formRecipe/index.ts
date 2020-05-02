import { LiveInputElementRecipe } from "../../../../services";

const difficulty: LiveInputElementRecipe = {
	label: "Hér getur þú breytt námsstiginu þínu",
	type: "drop-down",
	placeholder: "Veldu námstig",
	modified: false,
	value: "",
	passProps: {
		selections: [
			{
				text: "1. bekkur",
				value: 1,
			},
			{
				text: "2. bekkur",
				value: 2,
			},
			{
				text: "3. bekkur",
				value: 3,
			},
			{
				text: "4. bekkur",
				value: 4,
			},
			{
				text: "5. bekkur",
				value: 5,
			},
			{
				text: "6. bekkur",
				value: 6,
			},
			{
				text: "7. bekkur",
				value: 7,
			},
			{
				text: "8. bekkur",
				value: 8,
			},
			{
				text: "9. bekkur",
				value: 9,
			},
			{
				text: "10. bekkur",
				value: 10,
			},
			{
				text: "Framhaldsskóli",
				value: 11,
			},
		],
	},
};

const password: LiveInputElementRecipe = {
	label: "Lykilorð",
	type: "password-input",
	placeholder: "Breyta lykilorði",
	validation: {
		minLength: 6,
		trim: true,
	},
	modified: false,
	value: "",
	passProps: null,
};

const fontSize: LiveInputElementRecipe = {
	label: "Letur stærð í æfingum",
	placeholder: "Letur stærð",
	type: "slider",
	modified: false,
	value: "",

	passProps: {
		min: 14,
		max: 32,
		step: 2,
		marks: true,
	},
};

const previewTTL: LiveInputElementRecipe = {
	label: "Hversu lengi viltu sjá næsta texta bút?",
	placeholder: "Veldu tíma sem hentar þér",
	type: "slider",
	modified: false,
	value: "",
	passProps: {
		min: 3,
		max: 15,
		step: 1,
		marks: true,
	},
};

const alwaysShowPreview: LiveInputElementRecipe = {
	label: "Viltu að næsti texta bútur hverfi alls ekki?",
	type: "check-box",
	placeholder: "",
	modified: false,
	value: false,
	passProps: null,
};

const showOnScreenKeyboard: LiveInputElementRecipe = {
	label: "Sýna lyklaborð á skjá",
	type: "check-box",
	placeholder: "",
	modified: false,
	value: false,
	passProps: null,
};

const textBackground: LiveInputElementRecipe = {
	label: "Bakgrunnslitur fyrir aftan texta í æfingum",
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
			"#A5F7E1",
		],
	},
};

export const changeDifficultyForm = { difficulty };
export const changePasswordForm = { password };
export const changeUserPreferenceForm = {
	fontSize,
	previewTTL,
	alwaysShowPreview,
	showOnScreenKeyboard,
	textBackground,
};
