import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { clearErrorMessage } from "../../../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Component that displays the error message
 * if any for the file editor
 */
const Component = ({ message, clearErrorMessage }: IProps) => {
	const hasMessage = !!message;
	return (
		<Outer theme={{ hasMessage }}>
			<span>{message}</span>
			<FontAwesomeIcon icon={faTimes} onClick={clearErrorMessage} />
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => ({
	message: state.editor.errorMessage,
});

export default connect(mapStateToProps, { clearErrorMessage })(Component);
