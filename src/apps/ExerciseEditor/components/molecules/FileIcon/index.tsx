import React from "react";
import { Outer, Name } from "./styles";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper } from "../../";
import { connect } from "react-redux";
import { openExerciseFile } from "../../../actions";

const Component = ({ fileName, file, openExerciseFile }: IProps) => {
	return (
		<IconWrapper
			type="file"
			onClick={() => {}}
			onRightClick={() => {}}
			onDoubleClick={() => openExerciseFile(file)}
		>
			<Outer>
				<FontAwesomeIcon icon={faFileAlt} />
				<Name>{fileName}</Name>
			</Outer>
		</IconWrapper>
	);
};

export const FileIcon = connect(null, { openExerciseFile })(Component);
