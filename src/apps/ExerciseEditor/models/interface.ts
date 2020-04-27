export interface File {
	fileName: string;
	_id: string;
	text: string;
	modified?: boolean;
	local?: boolean;
}

export interface ExerciseRepr {
	_id: string;
	difficultRange: {
		min: number;
		max: number;
	};
	fileName: string;
	parts: string[];
}
