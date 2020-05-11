import { InputObject } from "../../../services";

export interface IProps<T> {
    fields: InputObject;
    label: string;
    postTo: string;
    onSuccess: (data: T) => void;
    children?: React.ReactNode;
}
