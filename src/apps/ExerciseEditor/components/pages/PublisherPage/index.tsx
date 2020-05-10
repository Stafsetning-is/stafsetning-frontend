import React, { useEffect } from "react";
import { Publisher } from "../../";
import { LoaderBox } from "../../../../../components";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../../reducers";
import { IProps, RouterProps } from "./interface";
import { openFileInPublisher, fetchFiles } from "../../../actions";

/**
 *  Page that handles the publishing of a file
 */
const Component = ({
	id,
	documents,
	openFileInPublisher,
	openFile,
	fetchFiles,
}: IProps) => {
	useEffect(() => {
		if (documents.length === 0) fetchFiles();
		const doc = documents.find((doc) => doc._id === id);
		if (doc) openFileInPublisher(doc);
	}, [id, documents, openFileInPublisher, fetchFiles]);

	return (
		<LoaderBox loading={!openFile}>
			{!openFile ? null : <Publisher file={openFile} />}
		</LoaderBox>
	);
};

const mapStateToProps = (state: StoreState) => ({
	documents: state.desktop.files,
	openFile: state.publisher.file,
});

const ReduxConnected = connect(mapStateToProps, {
	openFileInPublisher,
	fetchFiles,
})(Component);

const ConnectableToRouter = (props: RouteComponentProps<RouterProps>) => {
	return <ReduxConnected id={props.match.params.id} />;
};

export default ConnectableToRouter;
