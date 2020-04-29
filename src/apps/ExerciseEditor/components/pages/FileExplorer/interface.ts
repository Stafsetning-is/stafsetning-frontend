import { File } from "../../../models";

export interface IProps {
	fetchFiles: () => void;
	files: File[];
}
