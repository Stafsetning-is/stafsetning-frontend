import { FilterObject } from "../../../services";
import { Exercise } from "../../../models";

export function filterExercises(
	exercises: Exercise[],
	filterSettings: FilterObject
) {
	return exercises.filter((exercise) =>
		handleHideCompleted(exercise, filterSettings.hideCompleted)
	);
}

function handleHideCompleted(exercise: Exercise, shouldHideCompleted: boolean) {
	return !(shouldHideCompleted && exercise.completed);
}
