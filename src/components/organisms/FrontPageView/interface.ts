import { FilterObject } from "../../../services";
import { Exercise, SocketUser } from "../../../models";

export interface IProps {
	filterSettings: FilterObject;
	exercises: Exercise[];
	connectedUsers: SocketUser[];
}
