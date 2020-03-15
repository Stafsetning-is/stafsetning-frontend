import React, { useState, useEffect } from "react";
import { IProps } from "./interface";
import { InputFactory, BasicButton, LoaderBox, Shaky } from "../../";
import { TopErrorLabel } from "./styles";
import {
	getInputElementsArray,
	validateErrors,
	handlePost,
	SHAKE_DURATION
} from "./utils";
/**
 * Generates a form object based on a recipe provided
 *
 * Takes in generic type of post request response
 * when successful
 *
 * Takes in an object where the value implements
 * the InputElementRecipe interface. The generator
 * generates a form with the specified fields.
 *
 * Along with a submit button which submits the data
 *
 * TODO:
 *    [x] add form validation functionality
 *    [ ] add form onPost callback
 *    [x] add feedback to user about correctness of input
 */

export const FormGenerator = <T extends {}>({
	fields,
	label,
	postTo,
	onSuccess,
	children
}: IProps<T>) => {
	const [formObject, setFormObject] = useState(fields);
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [shake, setShake] = useState(false);
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

	/**
	 * handles the submit including
	 *     overall validation
	 *     talking to api
	 *     setLoading state
	 *     and displaying errorMessages
	 */
	const handleSubmit = async () => {
		if (loading) return;
		try {
			validateErrors(formObject);
			setLoading(true);
			const data = await handlePost<T>(formObject, postTo);
			onSuccess(data);
		} catch (error) {
			console.log("error", error);
			setErrorMessage(error.message);
			setShake(true);
		} finally {
			setLoading(false);
		}
	};

	/**
	 * Resets shake after
	 * 500ms
	 */
	useEffect(() => {
		setTimeout(() => setShake(false), SHAKE_DURATION);
	}, [shake]);

	return (
		<Shaky shake={shake}>
			<TopErrorLabel>{errorMessage}</TopErrorLabel>
			<LoaderBox loading={loading}>
				<form onSubmit={(e) => e.preventDefault()}>
					{inputElements.map((element) => (
						<InputFactory
							{...element}
							onChange={(val) => handleChange(element.key, val)}
						/>
					))}
					<BasicButton text={label} type="default" onClick={handleSubmit} />
					{children}
				</form>
			</LoaderBox>
		</Shaky>
	);
};
