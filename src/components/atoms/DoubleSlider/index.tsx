import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { InputComponent } from "../../../services";
import { DoubleSliderValue } from "./interface";

const useStyles = makeStyles({
	root: {
		width: "100%"
	}
});

function valuetext(value: number) {
	return `${value}`;
}

export const DoubleSlider = ({
	value,
	onChange,
	label,
	placeholder,
	validationMessage
}: InputComponent) => {
	const classes = useStyles();
	const [val, setValue] = React.useState<number[]>([20, 37]);

	const handleChange = (event: any, newValue: number | number[]) => {
		if (typeof newValue === "object") {
			const newVal: DoubleSliderValue = {
				max: newValue[1],
				min: newValue[0]
			};
			onChange(newVal);
		}
		setValue(newValue as number[]);
	};

	return (
		<div className={classes.root}>
			<Typography id="range-slider" gutterBottom>
				{label}
			</Typography>
			<Slider
				value={val}
				onChange={handleChange}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
			/>
		</div>
	);
};
