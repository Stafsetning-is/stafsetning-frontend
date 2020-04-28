import { File } from "../../../models";

export interface IProps extends RouterProps {
	documents: File[];
	openFileInPublisher: (file: File) => void;
	openFile: File | null;
	fetchFiles: () => void;
}

export interface RouterProps {
	id: string;
}
