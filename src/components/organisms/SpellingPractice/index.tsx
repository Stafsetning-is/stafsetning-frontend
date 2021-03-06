import React, { useState, useEffect } from "react";
import { IProps } from "./interface";
import { Exercise } from "./utils";
import ErrorCounter from "./ErrorCounter";
import PreviewButton from "./PreviewButton";
import StatBox from "./StatBox";
import OnScreenKeyboard from "./OnScreenKeyboard";
import TypedText from "./TypedText";
import { Redirect } from "react-router-dom";
import { Report } from "./utils/Exercise/interface";
import { Practice } from "../../../models";
import { Api } from "../../../api";
import {
	ExerciseContainer,
	AccessibilityContainer,
	TextViewWrapper,
} from "./styles";
import { StoreState } from "../../../reducers";
import { AccessibilitySettings } from "../../";
import { connect } from "react-redux";
import { emitFinishExercise, removeDialogByType } from "../../../actions";
import { useRemoveTutorialItems } from "../../../hooks";

/**
 * This component holds all the look and logic
 * which concerns the exercise itself.
 * The component assumes that the sentenceparts are ready.
 * So it takes the string[] as input when it's ready.
 * The SpellingPractice should only be used when all data is ready.
 */
const Component = ({
	parts,
	counter,
	owner,
	user,
	_id: exerciseId,
}: IProps) => {
	const [errorCount, setErrorCount] = useState(0);
	const [session, setSession] = useState<Exercise>();
	const [typed, setTyped] = useState("");
	const [preview, setPreview] = useState("");
	const [nextChar, setNextChar] = useState("");
	const [error, setError] = useState(false);
	const [comletedPracticeId, setCompletedPracticeId] = useState<string>();

	useEffect(() => {
		/**
		 * Sets up event listeners
		 * for the four events that
		 * might occur on user input
		 */
		if (session) return;
		let practice = Exercise.startExercise(
			parts,
			exerciseId,
			user.preferences
		)
			.on("error", () => {
				setError(true);
			})
			.on("success", () => {
				setError(false);
			})
			.on("errorCountChange", (newCount) => {
				setErrorCount(newCount);
			})
			.on("complete", (report: Report) => {
				Api.post<Practice>("/api/v1/exercises/complete", report)
					.then(({ data }) => {
						emitFinishExercise(user._id);
						setCompletedPracticeId(data._id);
					})
					.catch((error) => {
						// do nothing on error
					});
			})
			.on("textUpdate", (text: string, preview: string) => {
				setTyped(text);
				setPreview(preview);
			})
			.on("nextCharChange", (char: string) => {
				setNextChar(char);
			});
		setErrorCount(practice.getErrorCount());
		setSession(practice);
		return () => practice.stopListening();
	}, [user._id, parts, exerciseId]);

	useEffect(() => {
		if (!session) return;
		session.setAlwaysShowPreview(user.preferences.alwaysShowPreview);
	}, [session, user.preferences.alwaysShowPreview]);

	useEffect(() => {
		if (!session) return;
		session.setPreviewTimeToLive(user.preferences.previewTTL);
	}, [session, user.preferences.previewTTL]);

	useEffect(() => {
		if (!session) return;
		console.log("session", session);
		setTimeout(() => session.emitText(true), 250);
	}, [session]);

	useRemoveTutorialItems(
		() => typed.length === 10,
		"exercise-explain-step-2"
	);

	useRemoveTutorialItems(
		() => typed.length === 35,
		"exercise-explain-step-3"
	);

	useRemoveTutorialItems(
		() => typed.length === 60,
		"exercise-explain-step-4"
	);

	if (comletedPracticeId)
		return <Redirect to={`/completed/${comletedPracticeId}`} />;
	return (
		<React.Fragment>
			<StatBox counter={counter} ownerId={owner} />
			<ExerciseContainer>
				<AccessibilityContainer>
					<AccessibilitySettings label="Stillingar" />
				</AccessibilityContainer>
				<ErrorCounter count={errorCount} />
				<PreviewButton onClick={() => session?.emitText(true)} />
				<TextViewWrapper>
					<TypedText typed={typed} preview={preview} error={error} />
					<OnScreenKeyboard highlight={nextChar} />
				</TextViewWrapper>
			</ExerciseContainer>
		</React.Fragment>
	);
};

const mapStateToProps = (state: StoreState) => ({
	user: state.auth.user,
});

export const SpellingPractice = connect(mapStateToProps, {
	removeDialogByType,
})(Component);
