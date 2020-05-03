import { Exercise } from "../../../models";
export interface IProps {
	exercises: Exercise[];
	limit?: number;
	starExerciseInSelection: (id: string, saved: boolean) => void;
	hideStar?: any;
}
