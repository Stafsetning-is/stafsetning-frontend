import { LiveInputElementRecipe } from "../../../services";

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

export const changeDifficultyForm = { difficulty };
export const changePasswordForm = { password };
