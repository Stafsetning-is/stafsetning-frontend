import React, { useState, useEffect, useRef } from "react";
import { IProps } from "./interface";
import { Exercise } from "./utils";
import ErrorCounter from "./ErrorCounter";
import PreviewButton from "./PreviewButton";
import TypedText, { refObject } from "./TypedText";

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
	const [previewCallback, setPreviewCallback] = useState<cb>(() => () => {
		// console.log("Call back has not been set");
	});
	const typeTextRef = useRef(refObject);

	/**
	 * Sets up event listeners
	 * for the four events that
	 * might occur on user input
	 */
	useEffect(() => {
		const instance = Exercise.startExercise(sentenceParts)
			.on("error", () => {
				typeTextRef.current.giveErrorFeedback();
			})
			.on("success", () => {
				// handle success
			})
			.on("errorCountChange", (newCount) => {
				setErrorCount(newCount);
			})
			.on("complete", () => {
				// handle complete
			})
			.on("textUpdate", (text: string, preview: string) => {
				typeTextRef.current.setPreviewText(preview);
				typeTextRef.current.setText(text);
			});
		setPreviewCallback(() => () => instance.showPreview());
		previewCallback();
	}, []);

	useEffect(() => {
		previewCallback();
	}, [previewCallback]);

	return (
		<React.Fragment>
			<ErrorCounter count={errorCount} />
			<PreviewButton onClick={previewCallback} />
			<TypedText ref={typeTextRef} />
		</React.Fragment>
	);
};
