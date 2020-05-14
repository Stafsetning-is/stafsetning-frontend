import { PracticePopulated } from "../../../../models";

import { Api } from "../../../../api";

export const getPractice = async (id: string) => {
	try {
		const { data } = await Api.get<PracticePopulated>(
			`/api/v1/practices/${id}`
		);
		return data;
	} catch (error) {
		console.log("error", error);
		throw Error("Ekki tókst að fletta upp þessari prófraun");
	}
};
