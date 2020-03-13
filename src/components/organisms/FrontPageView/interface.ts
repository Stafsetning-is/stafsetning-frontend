import { FilterObject } from "../../../services";
import { Exercise } from "../../../models";
export interface IProps {
	filterSettings: FilterObject;
	exercises: Exercise[];
}
