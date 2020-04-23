export interface IProps {
	saved: boolean;
	handleToogle: (isSaved: boolean) => void;
	exercise: string;
}
