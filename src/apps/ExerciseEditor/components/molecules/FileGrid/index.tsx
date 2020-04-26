import React from "react";
import { FileIcon } from "../../";
import { IProps } from "./interface";
import { Grid } from "./styles";

export const FileGrid = ({ files, children }: IProps) => {
	return (
		<Grid>
			{children}
			{files.map((file) => (
				<FileIcon fileName={file.fileName} file={file} />
			))}
		</Grid>
	);
};
