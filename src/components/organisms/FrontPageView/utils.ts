import { FilterObject } from "../../../services";
import { Exercise } from "../../../models";
import { FilterState } from "../../../reducers/filterReducer";

/**
 * Special function type that takes in
 * exercise and filterState
 * and returns a boolean whether
 * that exercise should be displayed
 * according too that state;
 */
type FilterFunction = (
	exercise: Exercise,
	filterSettings: FilterState
) => boolean;

/**
 * Get exercises that pass the filter
 * @param exercises exercises to filter
 * @param filterSettings filterr state object
 */
export function filterExercises(
	exercises: Exercise[],
	filterSettings: FilterObject
) {
	return exercises.filter((exercise) =>
		filterRules().every((rule) => rule(exercise, filterSettings))
	);
}

// Handles hiding completed exercises
const handleHideCompleted = (exercise: Exercise, filterSettings: FilterState) =>
	!(filterSettings.hideCompleted && exercise.completed);

// Handles hiding long exercises
const handleHideLongText = (exercise: Exercise, filterSettings: FilterState) =>
	exercise.wordCount <= filterSettings.maxWordCount;

// Handles hiding short exercises
const handleHideShortText = (exercise: Exercise, filterSettings: FilterState) =>
	exercise.wordCount > filterSettings.minWordCount;

// Handles hiding by grammar rule query
const handleHideByGrammarRule = (
	exercise: Exercise,
	filterSettings: FilterState
) =>
	filterSettings.filterGrammarRule.length === 0
		? true
		: filterSettings.filterGrammarRule.every((rule) => exercise.report[rule]);

// handles quick filter methods like handle completed, show saved
const handleQuickFilter = (exercise: Exercise, filterSettings: FilterState) => {
	switch (filterSettings.quickFilter) {
		case "hide-completed":
			return !exercise.completed;
		case "show-saved":
			return exercise.saved;
		default:
			return true;
	}
};

const filterRules = (): FilterFunction[] => [
	handleHideCompleted,
	handleHideLongText,
	handleHideShortText,
	handleHideByGrammarRule,
	handleQuickFilter,
];
