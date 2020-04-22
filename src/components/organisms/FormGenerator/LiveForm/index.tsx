import React, { useState, useEffect } from "react";
import { IProps } from "../interface";
import { InputFactory, BasicButton, LoaderBox, Shaky } from "../../..";
import { TopErrorLabel, Form } from "../styles";
import {
	getInputElementsArray,
	validateErrors,
	handlePost,
	SHAKE_DURATION,
} from "../utils";

export const FormGenerator = <T extends {}>({
	fields,
	label,
	postTo,
	onSuccess,
	children,
}: IProps<T>) => {
	const [formObject, setFormObject] = useState(fields);
	const [errorMessage, setErrorMessage] = useState("");
	const inputElements = getInputElementsArray(formObject);

	const handleChange = (key: keyof typeof fields, val: any) => {
		const formObjectCopy = { ...formObject };
		const formElementCopy = { ...formObjectCopy[key] };
		formElementCopy.value = val;
		formObjectCopy[key] = formElementCopy;
		setFormObject({ ...formObjectCopy });
	};

	return (
		<React.Fragment>
			<TopErrorLabel>{errorMessage}</TopErrorLabel>
			<Form onSubmit={(e) => e.preventDefault()}>
				{inputElements.map((element) => (
					<div>
						<span>✅</span>
						<InputFactory
							{...element}
							onChange={(val) => handleChange(element.key, val)}
						/>
					</div>
				))}
			</Form>
		</React.Fragment>
	);
};
