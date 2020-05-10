import Validator from "./Validator";
import { InputObject, LiveInputObject } from "../../../../services";
import { Api } from "../../../../api";

export const SHAKE_DURATION = 500;

/**
 * Turns the LiveformObject to an mappable array
 * that can be easily turned to JSX
 * also adds validation messages if validator thinks
 * its necessary
 */
export const getLiveInputElementsArray = (fields: LiveInputObject) => {
	return mapFieldsToArray<LiveInputObject>(fields);
};

/**
 * helper function that maps object of
 * fields to array of fields
 */
const mapFieldsToArray = <T>(fields: T) => {
	const inputElementArray = [];
	for (const key in fields) {
		const item = {
			...fields[key],
			key,
		};
		inputElementArray.push(item);
	}
	return inputElementArray;
};
/**
 * Turns the formObject to a mapable array
 * that can be easily turned to JSX
 * also adds validation messages if validator thinks
 * it's necessary
 */
export const getInputElementsArray = (fields: InputObject) => {
	const inputElementArray = [];
	for (const key in fields) {
		const item = {
			...fields[key],
			key,
		};
		inputElementArray.push(item);
	}
	return inputElementArray;
};

/**
 * Reduces the input object to a simple
 * key value pair with values
 * as the user typed them in
 * @param fields the inputObject
 */
export const getUserData = (fields: InputObject): any => {
	let retObject: { [key: string]: any } = {};
	for (const key in fields) {
		retObject[key] = fields[key].value;
	}
	return retObject;
};

/**
 * Checks the fields and throws an error
 * if there's an error in user input
 * @param fields fields to validate for errors
 */
export const validateErrors = (fields: InputObject) => {
	const elementArray = getInputElementsArray(fields);
	const invalid = elementArray.some(
		(el) => !(el.value && !el.validationMessage)
	);
	if (invalid) throw new Error("");
};

/**
 * Handles communication with backend and
 * throws an error with a message
 * that can be displayable to the user
 * @param fields the InputObject to send
 * @param url POST url
 */
export const handlePost = async <T>(
	fields: InputObject,
	url: string
): Promise<T> => {
	try {
		const { data } = await Api.post<T>(url, getUserData(fields));
		return await delay(data);
	} catch (error) {
		await delay(null);
		throw new Error("Villa í samskiptum við vefþjón");
	}
};

export const applyDefaultValues = <T extends InputObject>(
	formObject: T,
	defaultValues?: { [key: string]: any }
) => {
	if (!defaultValues) return formObject;
	Object.keys(defaultValues).forEach((key) => {
		const inputElement = formObject[key];
		if (!inputElement) return;
		inputElement.value = defaultValues[key];
	});
	return formObject;
};

/**
 * Returns a promise of data
 * that will resolve in 1250ms
 * @param data Data to return after delay
 */
const delay = <T>(data: T): Promise<T> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(data), 2000);
	});
};
