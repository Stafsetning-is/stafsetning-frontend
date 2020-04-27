import { File } from "../../../models";

export interface IProps {
	fileName: string;
	file: File;
	openExerciseFile: (file: File) => void;
	selectSingleFile: (id: string) => void;
	selectFile: (id: string) => void;
	selected: boolean;
	_id: string;
}
