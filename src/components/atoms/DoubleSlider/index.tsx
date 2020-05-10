import React from "react";
import Slider from "@material-ui/core/Slider";
import { DoubleSliderValue } from "./interface";
import { IProps } from "./interface";
import { Outer } from "./styles";
import { ThemeProvider } from "@material-ui/styles";
import { FormLabel } from "../../";
import { theme } from "./utils";
/**
 *
 * @param min describes the minimum value for the DoubleSlider
 * @param max describes the maximum value for the DoubleSlider
 * @param defaultValues describes the minimum and maximum default values that the slider starts on
 */
export const DoubleSlider = ({
    value: { min, max },
    defaultValues,
    onChange,
    label,
}: IProps) => {
    /**
     * Recieves event from material-ui slider
     * and calls the onChange callback
     */
    const handleChange = (event: any, newValue: number | number[]) => {
        if (typeof newValue === "object") {
            const newVal: DoubleSliderValue = {
                max: newValue[1],
                min: newValue[0],
            };
            onChange(newVal);
        }
    };
    // valuetext is the bubble that tells the user what the current value of min or max is while changing the values
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
