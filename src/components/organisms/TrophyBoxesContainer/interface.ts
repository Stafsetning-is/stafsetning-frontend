import { Trophy } from "../../../models";

export interface IProps {
	trophies: Trophy[];
	setTrophy: (trophy: Trophy) => void;
}
