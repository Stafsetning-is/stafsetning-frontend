import React from "react";
import Slider from "@material-ui/core/Slider";
import { DoubleSliderValue } from "./interface";
import { IProps } from "./interface";
import { Outer } from "./styles";
import { ThemeProvider } from "@material-ui/styles";
import { FormLabel } from "../../";
import { theme } from "./utils";
/**
 * Double slider
 */
export const DoubleSlider = ({
	value: { min, max },
	defaultValues,
	onChange,
	label,
}: IProps) => {
	/**
	 * Recieves event from material-uui slider
	 * and calls the onChange callback
	 */
	const handleChange = (
		_event: React.ChangeEvent<{}>,
		newValue: number | number[]
	) => {
		if (typeof newValue === "object") {
			const newVal: DoubleSliderValue = {
				max: newValue[1],
				min: newValue[0],
			};
			onChange(newVal);
		}
	};

	const valuetext = (value: number) => `${value}`;

	const getVal = () => [
		min < defaultValues.min ? defaultValues.min : min,
		max > defaultValues.max ? defaultValues.max : max,
	];

	return (
		<Outer>
			<FormLabel text={label} />
			<ThemeProvider theme={theme}>
				<Slider
					max={defaultValues.max}
					min={defaultValues.min}
					value={getVal()}
					onChange={handleChange}
					valueLabelDisplay="auto"
					aria-labelledby="range-slider"
					getAriaValueText={valuetext}
				/>
			</ThemeProvider>
		</Outer>
	);
};
