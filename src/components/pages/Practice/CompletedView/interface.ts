export interface IProps {
	id: string;
}

export interface Practice {
	errors: ErrorObject[];
}

export interface ErrorObject {
	charAt: number;
	error: string;
}
