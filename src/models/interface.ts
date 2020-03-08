export interface Practice {
	errors: ErrorObject[];
}

export interface ErrorObject {
	charAt: number;
	error: string;
}

export interface Exercise {
	sentenceParts: string[];
}

export interface ExerciseSummary {
	title: string;
	exerciseId: string;
	bestAttempt?: number;
	finished?: boolean;
}
