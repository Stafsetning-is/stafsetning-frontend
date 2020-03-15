import { PracticePopulated } from "../../../../models";

import { Api } from "../../../../api";

export const getPractice = async (id: string) => {
	try {
		const { data } = await Api.get<PracticePopulated>(
			`/api/v1/practices/${id}`
		);
		return data;
	} catch (error) {
		throw Error("Ekki tókst að fletta upp þessari prófraun");
	}
};

export const placeHolderPractice: PracticePopulated = {
	errorItems: [],
	exercise: {
		title: "",
		parts: [],
		difficultRange: {
			min: 0,
			max: 0
		},
		length: 0,
		completed: false,
		_id: "",
		wordCount: 0
	},
	duration: 0,
	exerciseString: "",
	_id: ""
};
