import { FilterObject } from "../../../services";
import { Exercise } from "../../../models";

export function filterExercises(
	exercises: Exercise[],
	filterSettings: FilterObject
) {
	return exercises.filter(
		(exercise) =>
			handleHideCompleted(exercise, filterSettings.hideCompleted) &&
			handleHideLongText(exercise, filterSettings.maxWordCount) &&
			handleHideShortText(exercise, filterSettings.minWordCount)
	);
}

function handleHideCompleted(exercise: Exercise, shouldHideCompleted: boolean) {
	return !(shouldHideCompleted && exercise.completed);
}

function handleHideLongText(exercise: Exercise, maxLength: number) {
	return exercise.wordCount <= maxLength;
}

function handleHideShortText(exercise: Exercise, minLength: number) {
	return exercise.wordCount > minLength;
}
