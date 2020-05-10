import React, { useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { EditorFrame } from "./styles";
import {
	getTextFromNodes,
	handleKeyDown,
	textToNodes,
	NO_FILES_OPEN_TEXT,
	NO_TAB_OPEN_TEXT,
	EDITOR_PLACEHOLDER,
} from "./utils";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { writeToOpenFile } from "../../../../actions";
import { EditorProps as IProps } from "../interface";

/**
 * The text editor that user interacts with
 */
const EditText = ({
	writeToOpenFile,
	openFileText,
	noFiles,
	tabNotSelected,
}: IProps) => {
	const editor = useMemo(() => withHistory(withReact(createEditor())), []);

	return (
		<EditorFrame>
			{!tabNotSelected ? (
				<Slate
					editor={editor}
					value={textToNodes(openFileText ? openFileText : "")}
					onChange={(v) => {
						writeToOpenFile(getTextFromNodes(v));
					}}
				>
					<Editable
						placeholder={EDITOR_PLACEHOLDER}
						onKeyDown={handleKeyDown}
					/>
				</Slate>
			) : noFiles ? (
				NO_FILES_OPEN_TEXT
			) : (
				NO_TAB_OPEN_TEXT
			)}
		</EditorFrame>
	);
};

const mapStateToProps = (state: StoreState) => {
	const file = state.editor.openFiles.find(
		(file) => file._id === state.editor.openTab
	);

	return {
		openFileText: file ? file.text : "",
		noFiles: state.editor.openFiles.length === 0,
		tabNotSelected: state.editor.openTab === null,
	};
};

export default connect(mapStateToProps, { writeToOpenFile })(EditText);
