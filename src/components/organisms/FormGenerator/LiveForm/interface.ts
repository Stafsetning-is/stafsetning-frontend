import { LiveInputObject } from "../../../../services";

export interface IProps<T> {
	fields: LiveInputObject;
	postTo: string;
	onSuccess: (data: T) => void;
}
