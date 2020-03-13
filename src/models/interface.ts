export interface Practice {
	errors: ErrorObject[];
}

export interface ErrorObject {
	charAt: number;
	error: string;
}

export interface Exercise {
	parts: string[];
	completed: boolean;
	title?: string;
	_id: string;
	bestAttempt?: number;
	length: number;
	difficultRange: {
		min: number;
		max: number;
	};
	wordCount: number;
}

export interface User {
	name: string;
}
