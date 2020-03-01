import Validator from "./Validator";
import { InputObject } from "../../../../services";

/**
 * Turns the formObject to an mappable array
 * that can be easily turned to JSX
 * also adds validation messages if validator thinks
 * its necessary
 */
export const getInputElementsArray = (fields: InputObject) => {
	const inputElementArray = [];
	for (const key in fields) {
		const item = {
			...fields[key],
			key
		};
		Validator.check(item);
		inputElementArray.push(item);
	}
	return inputElementArray;
};
