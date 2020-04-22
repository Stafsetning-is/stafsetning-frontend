import React from "react";
import { IProps } from "./interface";
import { Button } from "./styles";

/**
 * Toogle button for filter menu
 */
export default ({ toggle, value, text }: IProps) => {
	return (
		<Button theme={{ value }} onClick={() => toggle(!value)}>
			{text}
		</Button>
	);
};
