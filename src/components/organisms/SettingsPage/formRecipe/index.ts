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
	type: "drop-down",
	passProps: {
		selections: [
			{
				text: "14px",
				value: 14,
			},
			{
				text: "16px",
				value: 16,
			},
			{
				text: "18px",
				value: 18,
			},
			{
				text: "20px",
				value: 20,
			},
			{
				text: "22px",
				value: 22,
			},
			{
				text: "24px",
				value: 24,
			},
			{
				text: "26px",
				value: 26,
			},
			{
				text: "28px",
				value: 28,
			},
			{
				text: "30px",
				value: 30,
			},
		],
	},
	modified: false,
	value: "",
};

const previewTTL: LiveInputElementRecipe = {
	label: "Hversu lengi viltu sjá næsta texta bút?",
	placeholder: "Veldu tíma sem hentar þér",
	type: "drop-down",
	passProps: {
		selections: [
			{
				text: "3 sekúndur",
				value: 3000,
			},
			{
				text: "4 sekúndur",
				value: 4000,
			},
			{
				text: "5 sekúndur",
				value: 5000,
			},
			{
				text: "6 sekúndur",
				value: 6000,
			},
			{
				text: "7 sekúndur",
				value: 7000,
			},
			{
				text: "8 sekúndur",
				value: 8000,
			},
			{
				text: "9 sekúndur",
				value: 9000,
			},
			{
				text: "10 sekúndur",
				value: 10000,
			},
		],
	},
	modified: false,
	value: "",
};

const alwaysShowPreview: LiveInputElementRecipe = {
	label: "Viltu að næsti texta bútur hverfi alls ekki?",
	type: "check-box",
	placeholder: "",
	validation: {
		minLength: 6,
		trim: true,
	},
	modified: false,
	value: false,
	passProps: null,
};

const showOnScreenKeyboard: LiveInputElementRecipe = {
	label: "Sýna lyklaborð á skjá",
	type: "check-box",
	placeholder: "",
	validation: {
		minLength: 6,
		trim: true,
	},
	modified: false,
	value: false,
	passProps: null,
};

export const changeDifficultyForm = { difficulty };
export const changePasswordForm = { password };
export const changeUserPreferenceForm = {
	fontSize,
	previewTTL,
	alwaysShowPreview,
	showOnScreenKeyboard,
};
