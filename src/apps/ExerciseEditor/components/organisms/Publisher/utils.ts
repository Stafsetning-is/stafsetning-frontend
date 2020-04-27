import { File, ExerciseRepr } from "../../../models";
import { Api } from "../../../../../api";

type validateFunction = (e: ExerciseRepr) => boolean;
interface ValidateRequirement {
	method: validateFunction;
	message: string;
}

export const publish = async (
	file: File,
	splits: number[],
	startRange?: number,
	endRange?: number
) => {
	const difficultRange = {
		min: startRange!,
		max: endRange!,
	};

	const textParts = splitText(file.text, splits);

	const exercise: ExerciseRepr = {
		_id: file._id,
		difficultRange,
		parts: textParts,
		fileName: file.fileName,
	};

	// validate(exercise);
	const saveMethod = file.local ? handleSave : handleUpdate;
	try {
		await saveMethod(exercise);
		await handlePublish(exercise);
	} catch (error) {
		console.log("error", error);
		throw new Error("Ekki tókst að vista æfingu");
	}
};

const handleSave = async (exercise: ExerciseRepr) =>
	await Api.post("/api/admin/exercises/", exercise);

const handleUpdate = async (exercise: ExerciseRepr) =>
	await Api.post("/api/admin/exercises/update", exercise);

const handlePublish = async (exercise: ExerciseRepr) =>
	await Api.post(`/api/admin/exercises/${exercise._id}/publish`);

const splitText = (text: string, splits: number[]) => {
	const value = [];
	let i;
	for (i = 0; i < splits.length - 1; i++) {
		value.push(text.slice(splits[i], splits[i + 1]));
	}
	value.push(text.slice(splits[i], text.length));
	return value;
};

const validators: ValidateRequirement[] = [
	{
		method: ({ difficultRange }) =>
			!!difficultRange.min && !!difficultRange.max,
		message: "Það vantar upplýsinga rum erfiðleikastig",
	},
	{
		method: ({ difficultRange }) => difficultRange.min <= difficultRange.max,
		message:
			"Lágmarks erfiðleika stig má ekki vera hærra en hámarks erfiðleikastig",
	},
];

const validate = async (exercise: ExerciseRepr) =>
	validators.forEach((val) => {
		if (!val.method(exercise)) throw Error(val.message);
	});
