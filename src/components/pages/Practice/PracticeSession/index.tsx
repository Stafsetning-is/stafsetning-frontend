import React, { useState, useEffect } from "react";
import { SpellingPractice, LoaderBox, ErrorModal } from "../../../";
import { LayoutWrapper } from "../../../../layout";
import { fetchExerciseText } from "./utils";
import { RouteComponentProps } from "react-router-dom";
import { IProps } from "./interface";
import { ProtectPageWrapper } from "../../../../hoc";

/**
 * Component contains the entire page for an practice exercise
 * It also manages the basic logic of fetching the exercise
 * from backend (in utils) and switches from loading
 * to practice mode by toggling its state
 *
 */
export default ({ match }: RouteComponentProps<IProps>) => {
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [exerciseParts, setExerciseParts] = useState<string[]>([]);

	/**
	 * Use effect fires only on first render
	 * and fetches the exercise and updates
	 * state accordingly
	 */
	useEffect(() => {
		fetchExerciseText(match.params.id)
			.then(({ parts }) => {
				setLoading(false);
				setExerciseParts(parts);
			})
			.catch((e) => {
				setErrorMessage(e.message);
			});
	}, []);

	return (
		<LayoutWrapper>
			<ProtectPageWrapper>
				<ErrorModal errorMessage={errorMessage}>
					<LoaderBox loading={loading}>
						<SpellingPractice
							exercise="22343as3"
							sentenceParts={exerciseParts}
						/>
					</LoaderBox>
				</ErrorModal>
			</ProtectPageWrapper>
		</LayoutWrapper>
	);
};
