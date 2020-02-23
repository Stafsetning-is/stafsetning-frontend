import React, { useState, useEffect } from "react";
import { SpellingPractice, LoaderBox } from "../../../";
import { LayoutWrapper } from "../../../../layout";
import { fetchExerciseText } from "./utils";

/**
 * Component contains the entire page for an practice exercise
 * It also manages the basic logic of fetching the exercise
 * from backend (in utils) and switches from loading
 * to practice mode by toggling its state
 *
 */
export default () => {
	const [loading, setLoading] = useState(true);
	let exerciseText: string[] = [];

	/**
	 * Use effect fires only on first render
	 * and fetches the exercise and updates
	 * state accordingly
	 */
	useEffect(() => {
		fetchExerciseText((textParts) => {
			exerciseText = textParts;
			setLoading(false);
		});
	}, []);

	return (
		<LayoutWrapper>
			<LoaderBox loading={loading}>
				<SpellingPractice exercise="22343as3" sentenceParts={exerciseText} />
			</LoaderBox>
		</LayoutWrapper>
	);
};
