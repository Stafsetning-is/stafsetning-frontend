export interface IProps {
	hideCompleted: (shouldHide: boolean) => void;
	setMax: (newValue: number) => void;
	setMin: (newValue: number) => void;
	min: number;
	max: number;
}
