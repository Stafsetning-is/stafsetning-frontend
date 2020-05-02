import React, { useState } from "react";
import { InputFactory } from "../../..";
import {
	InputElementOuter,
	Outer,
	Feedback,
	InputerElementInner,
} from "./styles";
import { Api } from "../../../../api";
import { getLiveInputElementsArray } from "../utils";
import { IProps } from "./interface";
import { handlePost } from "../utils";
import { LiveInputObject } from "../../../../services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ClipLoader } from "react-spinners";

export const LiveForm = <T extends {}>({ fields, postTo }: IProps<T>) => {
	const [formObject, setFormObject] = useState(fields);
	const inputElements = getLiveInputElementsArray(formObject);

	const handleChange = (key: keyof typeof fields, val: any) => {
		const formObjectCopy = updateFormElement(false, key, val);
		postDifficulty(formObjectCopy, key);
	};

	const postDifficulty = async (
		formObject: LiveInputObject,
		key: keyof typeof fields
	) => {
		const { data } = await Api.post<T>(postTo, formObject);
		updateFormElement(false, key);
	};

	const updateFormElement = (
		isModified: boolean,
		key: keyof typeof fields,
		value?: any
	) => {
		const formObjectCopy = { ...formObject };
		const formElementCopy = { ...formObjectCopy[key] };
		if (value) formElementCopy.value = value;
		formElementCopy.modified = isModified;
		formObjectCopy[key] = formElementCopy;
		setFormObject({ ...formObjectCopy });
		return formObjectCopy;
	};

	return (
		<Outer>
			{inputElements.map((element) => (
				<InputElementOuter>
					<InputerElementInner>
						<InputFactory
							{...element}
							onChange={(val) => handleChange(element.key, val)}
						/>
					</InputerElementInner>
				</InputElementOuter>
			))}
		</Outer>
	);
};
