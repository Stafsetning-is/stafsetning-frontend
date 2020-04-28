import React, { useEffect } from "react";
import { FileGrid, TextEditorIcon } from "../../";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { fetchFiles } from "../../../actions";
import { IProps } from "./interface";

const Component = ({ files, fetchFiles }: IProps) => {
	useEffect(() => {
		fetchFiles();
	}, [fetchFiles]);
	return (
		<div>
			<FileGrid files={files}>
				<TextEditorIcon fileName="Ritill" />
			</FileGrid>
		</div>
	);
};

const mapStateToProps = (store: StoreState) => ({
	files: store.desktop.files,
});

export default connect(mapStateToProps, { fetchFiles })(Component);
