import React, { useState } from "react";
import { InputFactory } from "../../..";
import { LayoutWrapper } from "../../../../layout";
import { TopErrorLabel, Form } from "../styles";
import { InputElementContainer } from "./styles";
import { getInputElementsArray } from "../utils";
import { IProps } from "./interface";

export const LiveForm = <T extends {}>({
	fields,
	postTo,
	onSuccess,
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
		<LayoutWrapper>
			<TopErrorLabel>{errorMessage}</TopErrorLabel>
			<Form onSubmit={(e) => e.preventDefault()}>
				{inputElements.map((element) => (
					<InputElementContainer>
						<InputFactory
							{...element}
							onChange={(val) => handleChange(element.key, val)}
						/>
					</InputElementContainer>
				))}
			</Form>
		</LayoutWrapper>
	);
};
