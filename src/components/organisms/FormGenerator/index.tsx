import React, { useState } from "react";
import { IProps } from "./interface";
import { InputFactory } from "../../";
import { getInputElementsArray } from "./utils";
/**
 * Generates a form object based on a recipe provided
 *
 * Takes in an object where the value implements
 * the InputElementRecipe interface. The generator
 * generates a form with the specified fields.
 *
 * Along with a submit button which submits the data
 *
 * TODO:
 *    [ ] add form validation functionality
 *    [ ] add form onPost callback
 *    [ ] add feedback to user about correctness of input
 */

export const FormGenerator = ({ fields }: IProps) => {
	const [formObject, setFormObject] = useState(fields);
	const inputElements = getInputElementsArray(formObject);

	/**
	 * Updates the stateful form obejct
	 * @param key key in form object
	 * @param val new value from user
	 */
	const handleChange = (key: keyof typeof fields, val: any) => {
		const formObjectCopy = { ...formObject };
		const formElementCopy = { ...formObjectCopy[key] };
		formElementCopy.value = val;
		formObjectCopy[key] = formElementCopy;
		setFormObject({ ...formObjectCopy });
	};

	return (
		<form>
			{inputElements.map((element) => (
				<InputFactory
					{...element}
					onChange={(key, val) => handleChange(element.key, val)}
				/>
			))}
			<button>Submit</button>
		</form>
	);
};
