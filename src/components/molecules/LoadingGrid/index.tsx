import React, { useState, useEffect } from "react";
import { IProps } from "./interface";
import { Grid, LoaderBox } from "../../";
import { LOAD_TIME_DURATION } from "./utils";

/**
 * Molecule that takes in children and returns
 * an Grid component to wrap the children.
 * LoadingGrid further more handles showing
 * loading animations when the amount of
 * item changes and also remove
 * loading animation after a fixed timeout
 */
export const LoadingGrid = ({ children, itemsInRow }: IProps) => {
	// set loading state to true by default
	const [loading, setLoading] = useState(true);
	// store the number of children as variable
	const childrenCount = React.Children.toArray(children).length;
	// declares noChildren boolean and assigns it an value
	const noChildren = childrenCount === 0;

	useEffect(() => {
		/**
		 * This use effect is called everytime
		 * the children count changes.
		 * It sets the loading to true
		 * then via timeout sets loading
		 * false
		 */
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, LOAD_TIME_DURATION);
	}, [childrenCount]);

	return (
		<LoaderBox loading={loading && noChildren}>
			<Grid isEmpty={noChildren} itemsInRow={itemsInRow}>
				{children}
			</Grid>
		</LoaderBox>
	);
};
