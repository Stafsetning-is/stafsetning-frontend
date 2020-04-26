import React from "react";
import { Outer, Name } from "./styles";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper } from "../../";
import { connect } from "react-redux";
import { openEditor } from "../../../actions";

const Component = ({ fileName, openEditor }: IProps) => {
	return (
		<IconWrapper
			type="app"
			onClick={() => {}}
			onDoubleClick={openEditor}
			onRightClick={() => {}}
		>
			<Outer>
				<FontAwesomeIcon icon={faFont} />
				<Name>{fileName}</Name>
			</Outer>
		</IconWrapper>
	);
};

export const TextEditorIcon = connect(null, { openEditor })(Component);