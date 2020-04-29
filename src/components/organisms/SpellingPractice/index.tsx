import React, { useState, useEffect, useRef } from "react";
import { IProps } from "./interface";
import { Exercise } from "./utils";
import ErrorCounter from "./ErrorCounter";
import PreviewButton from "./PreviewButton";
import StatBox from "./StatBox";
import TypedText, { refObject } from "./TypedText";
import { Redirect } from "react-router-dom";
import { Report } from "./utils/Exercise/interface";
import { Practice } from "../../../models";
import { Api } from "../../../api";
import { ExerciseContainer } from "./styles";

type cb = () => void;

/**
 * This component holds all the look and logic
 * that is concerned with the exercise itself
 * The components assumes that the sentenceparts are ready
 * So it takes the string[] as input when it's ready
 * The SpellingPractice should only be used when all data is ready
 */
export const SpellingPractice = ({ _id, parts, counter, owner }: IProps) => {
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
		const session = Exercise.startExercise(parts, _id)
			.on("error", () => {
				if (typeTextRef.current) typeTextRef.current.giveErrorFeedback();
			})
			.on("success", () => {
				// handle success
			})
			.on("errorCountChange", (newCount) => {
				setErrorCount(newCount);
			})
			.on("complete", (report: Report) => {
				Api.post<Practice>("/api/v1/exercises/complete", report)
					.then(({ data }) => {
						setCompletedPracticeId(data._id);
					})
					.catch((error) => {
						console.log("error", error);
					});
			})
			.on("textUpdate", (text: string, preview: string) => {
				setTyped(text);
				setPreview(preview);
			});

		setPreviewCallback(() => () => session.showPreview());
		setErrorCount(session.getErrorCount());
		return () => session.stopListening();
	}, [_id, parts]);

	useEffect(() => {
		previewCallback();
	}, [previewCallback]);

	if (comletedPracticeId)
		return <Redirect to={`/completed/${comletedPracticeId}`} />;
	return (
		<React.Fragment>
			<StatBox counter={counter} ownerId={owner} />
			<ExerciseContainer>
				<ErrorCounter count={errorCount} />
				<PreviewButton onClick={previewCallback} />
				<TypedText ref={typeTextRef} typed={typed} preview={preview} />
			</ExerciseContainer>
		</React.Fragment>
	);
};
