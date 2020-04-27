export interface IProps {
	startRange?: number;
	endRange?: number;
	setStartRange: (val: number) => void;
	setEndRange: (val: number) => void;
}
