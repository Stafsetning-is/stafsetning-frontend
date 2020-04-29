import React from "react";
import { ExerciseBox, LoaderBox } from "../../";
import { Container } from "./styles";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { starExerciseInSelection } from "../../../actions";

/**
 * Renders a list of exercises
 */
const Component = ({ exercises, limit, starExerciseInSelection }: IProps) => {
	const sliceAt = limit ?? exercises.length;

	return (
		<LoaderBox loading={exercises.length === 0}>
			<Container>
				{exercises.slice(0, sliceAt).map((itm) => (
					<ExerciseBox
						{...itm}
						key={`${itm._id}:${itm.saved}`}
						onStarClick={starExerciseInSelection}
					/>
				))}
			</Container>
		</LoaderBox>
	);
};

export const ExerciseBoxesContainer = connect(null, {
	starExerciseInSelection,
})(Component);
