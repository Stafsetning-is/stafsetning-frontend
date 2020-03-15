import React, { useState, useEffect, useRef } from "react";
import { IProps } from "./interface";
import { Exercise } from "./utils";
import ErrorCounter from "./ErrorCounter";
import PreviewButton from "./PreviewButton";
import TypedText, { refObject } from "./TypedText";
import { Redirect } from "react-router-dom";

type cb = () => void;

/**
 * This component holds all the look and logic
 * that is concerned with the exercise itself
 * The components assumes that the sentenceparts are ready
 * So it takes the string[] as input when it's ready
 * The SpellingPractice should only be used when all data is ready
 */
export const SpellingPractice = ({ exercise, sentenceParts }: IProps) => {
	const [errorCount, setErrorCount] = useState(0);
	const [typed, setTyped] = useState("");
	const [preview, setPreview] = useState("");
	const [previewCallback, setPreviewCallback] = useState<cb>(() => () => {});
	const typeTextRef = useRef(refObject);
	const [comletedPracticeId, setCompletedPracticeId] = useState<string>();

	useEffect(() => {
		/**
		 * Sets up event listeners
		 * for the four events that
		 * might occur on user input
		 */
		const session = Exercise.startExercise(sentenceParts, exercise)
			.on("error", () => {
				if (typeTextRef.current) typeTextRef.current.giveErrorFeedback();
			})
			.on("success", () => {
				// handle success
			})
			.on("errorCountChange", (newCount) => {
				setErrorCount(newCount);
			})
			.on("complete", () => {
				setCompletedPracticeId("1234");
			})
			.on("textUpdate", (text: string, preview: string) => {
				setTyped(text);
				setPreview(preview);
			});
		setPreviewCallback(() => () => session.showPreview());
		setErrorCount(session.getErrorCount());
		return () => session.stopListening();
	}, [exercise, sentenceParts]);

	useEffect(() => {
		previewCallback();
	}, [previewCallback]);

	if (comletedPracticeId)
		return <Redirect to={`/completed/${comletedPracticeId}`} />;
	return (
		<React.Fragment>
			<ErrorCounter count={errorCount} />
			<PreviewButton onClick={previewCallback} />
			<TypedText ref={typeTextRef} typed={typed} preview={preview} />
		</React.Fragment>
	);
};
