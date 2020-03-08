export interface Practice {
	errors: ErrorObject[];
}

export interface ErrorObject {
	charAt: number;
	error: string;
}

export interface Exercise {
	sentenceParts: string[];
	completed: boolean;
	title?: string;
	exerciseId: string;
	bestAttempt?: number;
	textLength: number;
}
