import React, { useState } from "react";
import { IProps } from "./interface";
import { InputFactory } from "../../";

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

	const inputElementArray = [];
	for (const key in formObject) {
		inputElementArray.push({
			...formObject[key],
			key
		});
	}

	const handleChange = (key: keyof typeof fields, val: any) => {
		const formObjectCopy = { ...formObject };
		const formElementCopy = { ...formObjectCopy[key] };
		formElementCopy.value = val;
		formObjectCopy[key] = formElementCopy;
		setFormObject({ ...formObjectCopy });
	};

	return (
		<form>
			{inputElementArray.map((element) => (
				<InputFactory
					{...element}
					onChange={(key, val) => handleChange(element.key, val)}
				/>
			))}
		</form>
	);
};
