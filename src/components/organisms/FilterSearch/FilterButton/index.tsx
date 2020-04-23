import React from "react";
import { IProps } from "./interface";
import { Button } from "./styles";

/**
 * Toogle button for filter menu
 */
export default ({ onClick, selected, text, quickFilter }: IProps) => {
	const selectOnToggle = selected ? "none" : quickFilter;
	return (
		<Button theme={{ selected }} onClick={() => onClick(selectOnToggle)}>
			{text}
		</Button>
	);
};
