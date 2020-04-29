import { Exercise } from "../../models";
import { Drawers } from "../../services";

export interface UserProfileState {
    saved: Exercise[];
    finished: Exercise[];
    openDrawer: Drawers
}
