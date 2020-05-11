import React from "react";
import { Outer, Name } from "./styles";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper } from "../../";
import { connect } from "react-redux";
import {
	openExerciseFile,
	selectSingleFile,
	selectFile,
} from "../../../actions";

/**
 * component for a exercise file icon
 * The component is wrapped by iconwrapper
 * which handles the click events of the file
 * rest is just UI stuff
 */
const Component = ({
	fileName,
	_id,
	file,
	openExerciseFile,
	selectSingleFile,
	selectFile,
	selected,
}: IProps) => {
	return (
		<IconWrapper
			type="file"
			onClick={(metakey) => {
				if (metakey) selectFile(_id);
				else selectSingleFile(_id);
			}}
			onRightClick={() => {}}
			onDoubleClick={() => openExerciseFile(file)}
		>
			<Outer theme={{ selected }}>
				<FontAwesomeIcon icon={faFileAlt} />
				<Name>{fileName}</Name>
			</Outer>
		</IconWrapper>
	);
};

export const FileIcon = connect(null, {
	openExerciseFile,
	selectSingleFile,
	selectFile,
})(Component);
