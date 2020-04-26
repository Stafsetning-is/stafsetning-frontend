import React from "react";
import { EditorOuter } from "./styles";
import Header from "./Header";
import EditText from "./EditText";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { IProps } from "./interface";

const Editor = ({ open, minimized, expanded }: IProps) => {
	if (!open) return null;
	return (
		<EditorOuter theme={{ minimized, expanded }}>
			<Header />
			<EditText />
		</EditorOuter>
	);
};

const mapStateToProps = (state: StoreState) => ({
	open: state.editor.open,
	minimized: state.editor.minimized,
	expanded: state.editor.expanded,
});

export const PlainTextEditor = connect(mapStateToProps)(Editor);
