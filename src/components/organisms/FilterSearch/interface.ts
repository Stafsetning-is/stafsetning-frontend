export interface IProps {
	setHideCompleted: (shouldHide: boolean) => void;
	setMaxWordCount: (newValue: number) => void;
	setMinWordCount: (newValue: number) => void;
	minWordCount: number;
	maxWordCount: number;
	hideCompleted: boolean;
}
