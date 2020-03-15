import * as React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";

export default ({ buttonText, onClick, selected }: IProps) => {
	return (
		<Button onClick={onClick} theme={{ selected }}>
			{buttonText}
		</Button>
	);
};
