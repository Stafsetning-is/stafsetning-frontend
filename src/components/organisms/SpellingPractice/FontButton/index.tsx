import * as React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";

export default ({ fontName, onClick, selected }: IProps) => {
	return (
		<Button onClick={onClick} theme={{ selected }}>
			{fontName}
		</Button>
	);
};
