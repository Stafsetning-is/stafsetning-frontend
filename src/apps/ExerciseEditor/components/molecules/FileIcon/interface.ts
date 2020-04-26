import { File } from "../../../models";

export interface IProps {
	fileName: string;
	file: File;
	openExerciseFile: (file: File) => void;
}
