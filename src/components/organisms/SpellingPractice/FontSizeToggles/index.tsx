import * as React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";
import { toogleTypeToIcon } from "./utils";

export default ({ onClick, type, value }: IProps) => {
	const hasValue = () => value !== null;
	const shouldFade = () => !hasValue();
	return (
		<Button theme={{ fade: shouldFade() }} onClick={onClick}>
			{toogleTypeToIcon(type)}
		</Button>
	);
};
