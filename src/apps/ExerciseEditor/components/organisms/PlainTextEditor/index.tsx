import React from "react";
import { EditorOuter } from "./styles";
import Header from "./Header";
import EditText from "./EditText";
import SubHeader from "./SubHeader";
import FinishButton from "./FinishButton";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { IProps } from "./interface";
import { verifyDocument } from "./utils";
import { withRouter } from "react-router-dom";
import {
	setErrorMessage,
	minimizeEditor,
	setCloseTab,
	clearErrorMessage,
	saveFileToDesktop,
} from "../../../actions";

/**
 * A text editor application
 * that can open exercise files
 * and edit them
 */
const Editor = ({
	open,
	minimized,
	expanded,
	openFile,
	setErrorMessage,
	clearErrorMessage,
	minimizeEditor,
	setCloseTab,
	history,
	saveFileToDesktop,
}: IProps) => {
	// if the editor is not open return nothing
	if (!open) return null;

	// handles the saving of the open file
	const handleFinish = async () => {
		if (!openFile) return;
		try {
			await verifyDocument(openFile);
			saveFileToDesktop(openFile);
			setCloseTab(openFile._id);
			clearErrorMessage();
			minimizeEditor();
			history.push(`/app/exercise-editor/publish/${openFile._id}`);
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<EditorOuter theme={{ minimized, expanded }}>
			<Header />
			<SubHeader />
			<EditText />
			<FinishButton onClick={handleFinish} />
		</EditorOuter>
	);
};

const mapStateToProps = (state: StoreState) => {
	const found = state.editor.openFiles.find(
		(file) => file._id === state.editor.openTab
	);
	return {
		open: state.editor.open,
		minimized: state.editor.minimized,
		expanded: state.editor.expanded,
		openFile: found,
	};
};

export const PlainTextEditor = withRouter(
	connect(mapStateToProps, {
		setErrorMessage,
		minimizeEditor,
		setCloseTab,
		clearErrorMessage,
		saveFileToDesktop,
	})(Editor)
);
