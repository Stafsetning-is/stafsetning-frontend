import React, { useState, useEffect } from "react";
import { SpellingPractice, LoaderBox } from "../../../";
import { LayoutWrapper } from "../../../../layout";
import { fetchExerciseText } from "./utils";
import { RouteComponentProps } from "react-router-dom";
import { IProps } from "./interface";

/**
 * Component contains the entire page for an practice exercise
 * It also manages the basic logic of fetching the exercise
 * from backend (in utils) and switches from loading
 * to practice mode by toggling its state
 *
 */
export default ({ match }: RouteComponentProps<IProps>) => {
	const [loading, setLoading] = useState(true);
	const [exerciseParts, setExerciseParts] = useState<string[]>([]);

	/**
	 * Use effect fires only on first render
	 * and fetches the exercise and updates
	 * state accordingly
	 */
	useEffect(() => {
		fetchExerciseText(match.params.id, (textParts) => {
			setExerciseParts(textParts);
			setLoading(false);
		});
	}, []);

	return (
		<LayoutWrapper>
			<LoaderBox loading={loading}>
				<SpellingPractice exercise="22343as3" sentenceParts={exerciseParts} />
			</LoaderBox>
		</LayoutWrapper>
	);
};
