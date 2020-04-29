import React, { useState, useEffect } from "react";
import { Outer, Inner } from "./styles";
import { IProps } from "./interface";

export default ({ ratio }: IProps) => {
	const [barLength, setBarLength] = useState(0);

	useEffect(() => {
		setBarLength(ratio);
	}, []);

	const displayWidth = ratio === 0 ? 0.01 : barLength;
	return (
		<Outer>
			<Inner theme={{ ratio: displayWidth }} />
		</Outer>
	);
};
