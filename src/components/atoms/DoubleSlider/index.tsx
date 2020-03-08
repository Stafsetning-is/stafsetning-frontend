import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { DoubleSliderValue } from "./interface";
import { IProps } from "./interface";
import { Outer } from "./styles";
import { ThemeProvider } from "@material-ui/styles";
import { FormLabel } from "../../";

const muiTheme = createMuiTheme({
	overrides: {
		MuiSlider: {
			thumb: {
				color: "#6600ff"
			},
			track: {
				color: "#6600ff"
			},
			rail: {
				color: "black"
			}
		}
	}
});

/**
 * Double slider
 */
export const DoubleSlider = ({
	value: { min, max },
	defaultValues,
	onChange,
	label
}: IProps) => {
	/**
	 * Recieves event from material-uui slider
	 * and calls the onChange callback
	 */
	const handleChange = (event: any, newValue: number | number[]) => {
		if (typeof newValue === "object") {
			const newVal: DoubleSliderValue = {
				max: newValue[1],
				min: newValue[0]
			};
			onChange(newVal);
		}
	};

	const valuetext = (value: number) => `${value}`;

	const getVal = () => [min, max];

	return (
		<Outer>
			<FormLabel text={label} />
			<ThemeProvider theme={muiTheme}>
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
