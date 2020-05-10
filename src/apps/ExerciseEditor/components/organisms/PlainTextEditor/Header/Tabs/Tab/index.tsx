import React, { useState } from "react";
import { Outer, CloseButton, Text, ModifiedDot } from "./styles";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

/**
 * Component for a single tab in the header
 * of the text editor
 */
export default ({
	name,
	selected,
	onClick,
	onClose,
	modified,
	onRename,
}: IProps) => {
	const [tabName, setTabName] = useState(name);
	const [editMode, setEditMode] = useState(false);

	const goToEditMode = () => setEditMode(true);
	const leaveEditMode = () => {
		setEditMode(false);
		onRename(tabName);
	};

	return (
		<Outer theme={{ selected }}>
			{editMode ? (
				<input
					type="test"
					onBlur={leaveEditMode}
					onChange={(e) => setTabName(e.target.value)}
					value={tabName}
				/>
			) : (
				<Text onClick={onClick} onDoubleClick={goToEditMode}>
					{tabName ? tabName : "Ónefnt skjal"}
				</Text>
			)}
			{modified ? <ModifiedDot /> : null}

			<CloseButton onClick={onClose}>
				<FontAwesomeIcon icon={faWindowClose} />
			</CloseButton>
		</Outer>
	);
};
