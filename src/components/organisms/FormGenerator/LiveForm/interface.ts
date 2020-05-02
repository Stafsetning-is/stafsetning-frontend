import { LiveInputObject } from "../../../../services";

export interface IProps<T> {
    fields: LiveInputObject;
    postTo: string;
    //changeDifficulty: (difficulty: LiveInputObject) => void;
    onSuccess: (data: T) => void;
}
