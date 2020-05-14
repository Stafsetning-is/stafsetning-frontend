import React, { useState, useRef, useEffect } from "react";
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
	const inputRef = useRef<HTMLInputElement>(null);

	const goToEditMode = () => setEditMode(true);
	const leaveEditMode = () => {
		setEditMode(false);
		onRename(tabName);
	};

	/**
	 * when edit mode is toggled on
	 * then highlight and select content
	 * in input
	 */
	useEffect(() => {
		if (editMode) {
			const current = inputRef.current;
			current?.focus();
			current?.select();
		}
	}, [editMode]);

	return (
		<Outer theme={{ selected }}>
			{editMode ? (
				<input
					type="test"
					onBlur={leaveEditMode}
					onChange={(e) => setTabName(e.target.value)}
					value={tabName}
					ref={inputRef}
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
