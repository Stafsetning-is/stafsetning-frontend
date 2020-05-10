import { File } from "../../../models";
import { Api } from "../../../../../api";

const MIN_WORD_COUNT = 15;
const MAX_WORD_COUNT = 140;

type ValidationFunction = (file: File) => boolean;
interface ValidationInstructions {
	message: string;
	validationFunction: ValidationFunction;
}

/**
 * Array of validation instructions
 */
const validators: ValidationInstructions[] = [
	{
		message: `Æfing verður að hafa a.m.k. ${MIN_WORD_COUNT} orð`,
		validationFunction: (file) =>
			file.text.split(" ").length >= MIN_WORD_COUNT,
	},
	{
		message: `Æfing má ekki hafa fleiri en ${MAX_WORD_COUNT} orð`,
		validationFunction: (file) =>
			file.text.split(" ").length < MAX_WORD_COUNT,
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

/**
 * verifies the file if it's good for saving
 * @param file file interface
 */
export const verifyDocument = async (file: File) => {
	verifyFileContents(file);
	await checkForDuplicates(file);
};

/**
 * iterates through the validators and throws
 * an error if the condition is not met
 * @param file file interface
 */
const verifyFileContents = (file: File) => {
	validators.forEach(({ validationFunction, message }) => {
		if (!validationFunction(file)) throw new Error(message);
	});
};

/**
 * function that checks for duplicates
 * with the pai
 */
const checkForDuplicates = async ({ fileName, _id }: File) => {
	// if error is file exists code, then the error is because file exists
	const FILE_EXISTS_CODE = "FILE_EXISTS";
	// makes file name url save
	const urlSafe = fileName.replace(/ /g, "$%20");
	try {
		// gets the file by file name
		const { data } = await Api.get<File>("/api/admin/exercises/file_name", {
			params: {
				name: urlSafe,
			},
		});
		// if the file found is not the same as this one, then error
		if (_id !== data._id) throw Error(FILE_EXISTS_CODE);
	} catch (error) {
		// throw custom error
		if (error.message === FILE_EXISTS_CODE) {
			throw Error("Þú hefur áður búið til skjal með þessu nafni");
		}
	}
};
