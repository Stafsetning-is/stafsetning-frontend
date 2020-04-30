import { Exercise, User } from "../../../models";
import { Drawers } from "../../../services";

export interface IProps {
    user: User;
    saved: Exercise[];
    finished: Exercise[];
    getSavedExercises: () => void;
    fetchFinishedExercises: () => void;
}
