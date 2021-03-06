import React, { useState, useEffect, Suspense } from "react";
import { LoaderBox, ErrorModal, Loader } from "../../..";
import { fetchExerciseText } from "./utils";
import { RouteComponentProps } from "react-router-dom";
import { IProps } from "./interface";
import { ProtectPageWrapper } from "../../../../hoc";
import { Exercise } from "../../../../models";
import {
	EXERCISE_FIRST_STEP,
	EXERCISE_SECOND_STEP,
	EXERCISE_THIRD_STEP,
	EXERCISE_FOURTH_STEP,
	TutorialLocations,
} from "../../../../services";
import { TutorialWrapper } from "./../../../../hoc";

const SpellingPractice = React.lazy(() =>
	import(
		"../../../organisms/SpellingPractice"
	).then(({ SpellingPractice }) => ({ default: SpellingPractice }))
);

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
	const [exercise, setExercise] = useState<Exercise>();

	/**
	 * Use effect fires only on first render
	 * and fetches the exercise and updates
	 * state accordingly
	 */
	useEffect(() => {
		fetchExerciseText(match.params.id)
			.then((exercise) => {
				setLoading(false);
				setExercise(exercise);
			})
			.catch((e) => {
				setErrorMessage(e.message);
			});
	}, [match.params.id]);

	return (
		<ProtectPageWrapper>
			<ErrorModal errorMessage={errorMessage}>
				<LoaderBox loading={loading}>
					{exercise ? (
						<Suspense fallback={<Loader loading={true} />}>
							<TutorialWrapper
								items={[
									EXERCISE_FIRST_STEP,
									EXERCISE_SECOND_STEP,
									EXERCISE_THIRD_STEP,
									EXERCISE_FOURTH_STEP,
								]}
								location={TutorialLocations.exercisePage}
							>
								<SpellingPractice {...exercise} />
							</TutorialWrapper>
						</Suspense>
					) : null}
				</LoaderBox>
			</ErrorModal>
		</ProtectPageWrapper>
	);
};
