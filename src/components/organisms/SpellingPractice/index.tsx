import React, { useState, useEffect, useRef } from "react";
import { IProps } from "./interface";
import { Exercise } from "./utils";
import ErrorCounter from "./ErrorCounter";
import TypedText, { refObject } from "./TypedText";

/**
 * This component holds all the look and logic
 * that is concerned with the exercise itself
 * The components assumes that the sentenceparts are ready
 * So it takes the string[] as input when it's ready
 * The SpellingPractice should only be used when all data is ready
 */
export const SpellingPractice = ({ exercise, sentenceParts }: IProps) => {
	const [errorCount, setErrorCount] = useState(0);
	const typeTextRef = useRef(refObject);
	/**
	 * Sets up event listeners
	 * for the four events that
	 * might occur on user input
	 */
	useEffect(() => {
		Exercise.startExercise(sentenceParts)
			.on("error", () => {
				typeTextRef.current.giveErrorFeedback();
			})
			.on("success", (char) => {
				typeTextRef.current.addCharacter(char);
			})
			.on("errorCountChange", (newCount) => {
				setErrorCount(newCount);
			})
			.on("complete", () => {
				// handle complete
			});
	}, []);

	return (
		<React.Fragment>
			<ErrorCounter count={errorCount} />
			<TypedText ref={typeTextRef} />
		</React.Fragment>
	);
};
