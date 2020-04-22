import { InputObject } from "../../../../services";

export interface IProps<T> {
	fields: InputObject;
	postTo: string;
	onSuccess: (data: T) => void;
}
