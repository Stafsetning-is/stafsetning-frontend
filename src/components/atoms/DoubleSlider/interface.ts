import { InputComponent } from "../../../services";

export interface DoubleSliderValue extends MinMax {}

interface MinMax {
	min: number;
	max: number;
}

export interface IProps extends InputComponent {
	defaultValues: MinMax;
}
