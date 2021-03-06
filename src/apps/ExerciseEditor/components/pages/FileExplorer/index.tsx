import React, { useEffect } from "react";
import { FileGrid, TextEditorIcon, StatViewerIcon } from "../../";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { fetchFiles } from "../../../actions";
import { IProps } from "./interface";

/**
 * The desktop seen in the file explorer app
 */
const Component = ({ files, fetchFiles }: IProps) => {
	useEffect(() => {
		fetchFiles();
	}, [fetchFiles]);
	return (
		<div>
			<FileGrid files={files}>
				<TextEditorIcon fileName="Ritill" />
				<StatViewerIcon />
			</FileGrid>
		</div>
	);
};

const mapStateToProps = (store: StoreState) => ({
	files: store.desktop.files,
});

export default connect(mapStateToProps, { fetchFiles })(Component);
