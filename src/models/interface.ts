export interface Practice {
	errorItems: ErrorObject[];
	exerciseString: string;
	duration: number;
	exercise: string;
	_id: string;
}

export interface PracticePopulated {
	errorItems: ErrorObject[];
	exerciseString: string;
	duration: number;
	exercise: Exercise;
	_id: string;
	createdAt: string;
	proverbText: string;
}

export interface ErrorObject {
	charAt: number;
	error: string;
}

export interface Exercise {
	parts: string[];
	completed: boolean;
	title: string;
	_id: string;
	length: number;
	difficultRange: {
		min: number;
		max: number;
	};
	report: Report;
	wordCount: number;
	practice?: string;
	score?: number;
	saved: boolean;
}

export interface Report {
	[key: string]: {
		count: number;
		name: string;
	};
}

export interface User {
	name: string;
	avatar: string;
}
