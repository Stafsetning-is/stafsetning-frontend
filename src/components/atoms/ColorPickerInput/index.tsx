import React, { useState } from "react";
import { FormLabel } from "..";
import { Grid } from "../../";
import { IProps } from "./interface";
import {
    Outer,
    PickedColor,
    ColorBox,
    Selections,
    Text,
    Inner,
} from "./styles";

export const ColorPickerInput = ({
    value,
    onChange,
    label,
    validationMessage,
    colors,
}: IProps) => {
    const [isOpen, setOpen] = useState(false);

    // opens or keeps open
    const open = () => setOpen(true);
    // closes or keeps closed
    const close = () => setOpen(false);

    /**
     * Returns validation message
     */
    const getValidationMessage = () => {
        if (!value) return "";
        return validationMessage ?? "";
    };
    /**
     * when the value changes, the colorPicker closes
     */
    const handleSelection = (value: any) => {
        onChange(value);
        close();
    };
    /**
     * Here the color picker opens up when the user clicks on it
     * It closes when the mouse moves away from the form
     * when the user clicks on a color, handleSelection will change the currently selected color regarding the background color in the exercise box
     */
    return (
        <Outer onMouseLeave={close}>
            <FormLabel text={label} errorMessage={getValidationMessage()} />
            <Inner onClick={open}>
                <PickedColor>
                    <ColorBox theme={{ color: value }} />
                </PickedColor>
                <Text>Veldu lit</Text>
                {isOpen ? (
                    <Selections>
                        <Grid itemsInRow={4} isEmpty={false}>
                            {colors.map((color) => (
                                <ColorBox
                                    theme={{ color }}
                                    onClick={() => handleSelection(color)}
                                />
                            ))}
                        </Grid>
                    </Selections>
                ) : null}
            </Inner>
        </Outer>
    );
};
