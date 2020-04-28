import { File } from "../../../models";
import { Api } from "../../../../../api";

const MIN_WORD_COUNT = 15;
const MAX_WORD_COUNT = 140;

type ValidationFunction = (file: File) => boolean;
interface ValidationInstructions {
	message: string;
	validationFunction: ValidationFunction;
}

const validators: ValidationInstructions[] = [
	{
		message: `Æfing verður að hafa a.m.k. ${MIN_WORD_COUNT} orð`,
		validationFunction: (file) => file.text.split(" ").length >= MIN_WORD_COUNT,
	},
	{
		message: `Æfing má ekki hafa fleiri en ${MAX_WORD_COUNT} orð`,
		validationFunction: (file) => file.text.split(" ").length < MAX_WORD_COUNT,
	},
	{
		message: "Þú hefur ekki breytt æfingunni",
		validationFunction: (file) => !!file.modified,
	},
	{
		message: "Nefndu skjalið með því að tvíklikka á flipa þess",
		validationFunction: (file) => file.fileName !== "",
	},
	{
		message: "Nafn skjalsins inniheldur óleyfð tákn",
		validationFunction: (file) =>
			!!file.fileName.match(/^[a-zA-Z0-9_\-áéíýúóðþæÁÉÍÝÚÓÆÐÞ ]*$/g),
	},
];

export const verifyDocument = async (file: File) => {
	console.log("file", file);
	verifyFileContents(file);
	await checkForDuplicates(file);
};

const verifyFileContents = (file: File) => {
	validators.forEach(({ validationFunction, message }) => {
		if (!validationFunction(file)) throw new Error(message);
	});
};

const checkForDuplicates = async ({ fileName, _id }: File) => {
	const FILE_EXISTS_CODE = "FILE_EXISTS";
	const urlSafe = fileName.replace(/ /g, "$%20");

	try {
		const { data } = await Api.get<File>("/api/admin/exercises/file_name", {
			params: {
				name: urlSafe,
			},
		});
		if (_id !== data._id) throw Error(FILE_EXISTS_CODE);
	} catch (error) {
		if (error.message === FILE_EXISTS_CODE) {
			throw Error("Þú hefur áður búið til skjal með þessu nafni");
		}
	}
};
