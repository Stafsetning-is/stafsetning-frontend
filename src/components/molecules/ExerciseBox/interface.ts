import { Exercise } from "../../../models";
export interface IProps extends Exercise {
	onStarClick: (id: string, saved: boolean) => void;
}
