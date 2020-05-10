import React, { useState, useEffect } from "react";
import { Outer, Inner } from "./styles";
import { IProps } from "./interface";
import { MIN_BAR_WIDTH } from "./utils";
/**
 * An bar that takes in a ratio of
 * how how many completed said row
 * compared to the most completed exercise
 *
 * And returns a bar that is proportionally
 * wide to said ratio.
 */
export default ({ ratio }: IProps) => {
	// sets the state to length zero
	const [barLength, setBarLength] = useState(0);

	// sets the length with hook
	useEffect(() => {
		setBarLength(ratio);
	}, []);

	// makes sure that the width is not below the min width
	const displayWidth = ratio < MIN_BAR_WIDTH ? MIN_BAR_WIDTH : barLength;
	return (
		<Outer>
			<Inner theme={{ ratio: displayWidth }} />
		</Outer>
	);
};
