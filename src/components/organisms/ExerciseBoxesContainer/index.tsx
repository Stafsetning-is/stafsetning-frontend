import React, { useEffect, useState } from "react";
import { ExerciseBox, LoaderBox } from "../../";
import { Container } from "./styles";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { starExerciseInSelection } from "../../../actions";
import { LOAD_TIME_DURATION, TEXT, TITLE } from "./utils";
import { InfoPage } from "../../";

/**
 * Renders a list of exercises
 */
const Component = ({ exercises, limit, starExerciseInSelection }: IProps) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, LOAD_TIME_DURATION);
	}, [exercises.length]);

	const sliceAt = limit ?? exercises.length;

	if (!loading && exercises.length === 0)
		return (
			<InfoPage type="not-found" title={TITLE} text={TEXT}>
				{" "}
			</InfoPage>
		);
	return (
		<LoaderBox loading={loading && exercises.length === 0}>
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
