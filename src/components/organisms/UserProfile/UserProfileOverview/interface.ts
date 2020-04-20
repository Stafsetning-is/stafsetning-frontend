import { Exercise } from "../../../../models";
export interface IProps {
    exercises: Exercise[];
    fetchFinishedExercises: () => void;
}
