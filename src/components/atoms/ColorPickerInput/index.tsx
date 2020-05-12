import React, { useState } from "react";
import { FormLabel } from "..";
import { Grid } from "../../";
import { IProps } from "./interface";
import { COLORS_IN_ROW } from "./utils";
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

	const handleSelection = (value: string) => {
		onChange(value);
		close();
	};

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
						<Grid itemsInRow={COLORS_IN_ROW} isEmpty={false}>
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
