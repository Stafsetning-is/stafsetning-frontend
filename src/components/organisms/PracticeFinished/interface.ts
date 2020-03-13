import { Practice, Exercise } from "../../../models";

export interface IProps extends Practice {
	nextUp: Exercise[];
}
