import { PracticePopulated, Exercise, Practice } from "../../../models";

export interface IProps extends PracticePopulated {
    nextUp: Exercise[];
}
