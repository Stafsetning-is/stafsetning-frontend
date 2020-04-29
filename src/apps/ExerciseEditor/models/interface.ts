export interface File {
	fileName: string;
	_id: string;
	text: string;
	modified?: boolean;
	local?: boolean;
	counter: number;
}

export interface BaseExercise {
	difficultRange: {
		min: number;
		max: number;
	};
	fileName: string;
	parts: string[];
}

export interface ExerciseRepr extends BaseExercise {
	_id: string;
	title: string;
	counter: number;
}

export interface CreateExercise extends BaseExercise {
	_id?: string;
}
