import { PracticePopulated, Exercise } from "../../../models";

export interface IProps extends PracticePopulated {
	nextUp: Exercise[];
}
