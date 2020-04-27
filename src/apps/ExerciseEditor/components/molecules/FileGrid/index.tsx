import React from "react";
import { FileIcon } from "../../";
import { IProps } from "./interface";
import { Grid, Outer } from "./styles";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
const Component = ({ files, children, selected }: IProps) => {
	const selectedDict: { [key: string]: boolean } = {};
	selected.forEach((key) => (selectedDict[key] = true));

	return (
		<Outer>
			<Grid>
				{children}
				{files.map((file) => (
					<FileIcon
						fileName={file.fileName}
						file={file}
						selected={selectedDict[file._id] ?? false}
						_id={file._id}
					/>
				))}
			</Grid>
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => ({
	selected: state.desktop.selected,
});

export const FileGrid = connect(mapStateToProps)(Component);
