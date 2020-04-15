export interface IProps {
	exerciseString: string;
	errors: ErrorItem[];
}

interface ErrorItem {
	charAt: number;
	error: string;
}
