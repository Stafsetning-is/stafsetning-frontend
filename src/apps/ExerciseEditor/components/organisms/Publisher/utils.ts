import { File, CreateExercise, ExerciseRepr } from "../../../models";
import { Api } from "../../../../../api";

type validateFunction = (e: CreateExercise) => boolean;
interface ValidateRequirement {
	method: validateFunction;
	message: string;
}

export const publish = async (
	file: File,
	splits: number[],
	startRange?: number,
	endRange?: number
): Promise<ExerciseRepr> => {
	const difficultRange = {
		min: startRange!,
		max: endRange!,
	};
	const saveMethod = file.local ? handleSave : handleUpdate;
	const isNew = file.local;
	const textParts = splitText(file.text, splits);
	const data: CreateExercise = {
		difficultRange,
		parts: textParts,
		fileName: file.fileName,
		_id: isNew ? undefined : file._id,
	};

	validate(data);

	try {
		const exercise = await saveMethod(data);
		return await handlePublish(exercise);
	} catch (error) {
		throw new Error("Ekki tókst að vista æfingu");
	}
};

const getResData = async <D, R>(data: D, url: string): Promise<R> => {
	const res = await Api.post<R>(url, data);
	return res.data;
};

const handleSave = async (exercise: CreateExercise) =>
	await getResData<CreateExercise, ExerciseRepr>(
		exercise,
		"/api/admin/exercises/"
	);

const handleUpdate = async (exercise: CreateExercise) =>
	await getResData<CreateExercise, ExerciseRepr>(
		exercise,
		"/api/admin/exercises/update"
	);

const handlePublish = async (exercise: ExerciseRepr) =>
	await getResData<CreateExercise, ExerciseRepr>(
		exercise,
		`/api/admin/exercises/${exercise._id}/publish`
	);

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
		message: "Það vantar upplýsingar um erfiðleikastig",
	},
	{
		method: ({ difficultRange }) => difficultRange.min <= difficultRange.max,
		message:
			"Lágmarks erfiðleika stig má ekki vera hærra en hámarks erfiðleikastig",
	},
];

const validate = (exercise: CreateExercise) =>
	validators.forEach((val) => {
		if (!val.method(exercise)) throw Error(val.message);
	});
