import React, { useState, useEffect } from "react";
import { IProps } from "./interface";
import { Grid, LoaderBox } from "../../";
import { LOAD_TIME_DURATION } from "./utils";

export const LoadingGrid = ({ children, itemsInRow }: IProps) => {
	const [loading, setLoading] = useState(true);

	const childrenCount = React.Children.toArray(children).length;
	const noChildren = childrenCount === 0;

	useEffect(() => {
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
