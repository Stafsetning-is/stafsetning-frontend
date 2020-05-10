import React from "react";
import { Outer, Name } from "./styles";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper } from "../../";
import { connect } from "react-redux";
import { openEditor } from "../../../actions";

/**
 * Icon for the text editor
 */
const Component = ({ fileName, openEditor }: IProps) => {
	return (
		<IconWrapper
			type="app"
			onClick={() => {}}
			onDoubleClick={openEditor}
			onRightClick={() => {}}
		>
			<Outer>
				<FontAwesomeIcon icon={faPencilRuler} />
				<Name>{fileName}</Name>
			</Outer>
		</IconWrapper>
	);
};

export const TextEditorIcon = connect(null, { openEditor })(Component);
