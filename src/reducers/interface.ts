import { AuthState } from "./authReducer";
import { FilterState } from "./filterReducer";
import { ExercisesState } from "./exercisesReducer";
import { PracticesState } from "././userProfileReducer";
import { Practice } from "../models";

export interface StoreState {
    auth: AuthState;
    filter: FilterState;
    exercises: ExercisesState;
    practices: PracticesState;
}
