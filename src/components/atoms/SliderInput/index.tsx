import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { InputComponent } from "../../../services";
import { FormLabel } from "../../";
import { Outer } from "./styles";

export const SliderInput = ({
	value,
	onChange,
	label,
	validationMessage,
	passProps,
}: InputComponent) => {
	const [unCommitedValue, setUnCommitedValue] = useState(value);
	/**
	 * Returns validation message
	 */
	const getValidationMessage = () => {
		if (!value) return "";
		return validationMessage ?? "";
	};

	return (
		<Outer>
			<FormLabel text={label} errorMessage={getValidationMessage()} />
			<Slider
				defaultValue={value}
				value={unCommitedValue}
				aria-labelledby="discrete-slider"
				valueLabelDisplay="auto"
				{...passProps}
				marks
				onChange={(_e, val) => setUnCommitedValue(val)}
				onChangeCommitted={(_e, val) => onChange(val)}
			/>
		</Outer>
	);
};
