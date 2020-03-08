import { getPracticeById } from "../../../../api";
import { Practice } from "./interface";

export const getPractice = async (id: string) => {
	try {
		const data: Practice = await getPracticeById(id);
		return data;
	} catch (error) {
		throw Error("Ekki tókst að fletta upp þessari prófraun");
	}
};

export const placeHolderPractice = {
	errors: []
};
