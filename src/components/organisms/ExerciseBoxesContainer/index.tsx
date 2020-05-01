import React, { useEffect, useState } from "react";
import { ExerciseBox, LoaderBox } from "../../";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { starExerciseInSelection } from "../../../actions";
import { LoadingGrid } from "../../";

/**
 * Renders a list of exercises
 */
const Component = ({
	exercises,
	limit,
	starExerciseInSelection,
	hideStar,
}: IProps) => {
	const sliceAt = limit ?? exercises.length;

	return (
		<LoadingGrid>
			{exercises.slice(0, sliceAt).map((itm) => (
				<ExerciseBox
					hideStar={hideStar}
					{...itm}
					key={`${itm._id}:${itm.saved}`}
					onStarClick={starExerciseInSelection}
				/>
			))}
		</LoadingGrid>
	);
};

export const ExerciseBoxesContainer = connect(null, {
	starExerciseInSelection,
})(Component);
