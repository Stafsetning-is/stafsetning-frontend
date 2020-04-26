import React from "react";
import { Outer, CloseButton, Text, ModifiedDot } from "./styles";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default ({ name, selected, onClick, onClose, modified }: IProps) => {
	return (
		<Outer theme={{ selected }}>
			<Text onClick={onClick}>{name ? name : "Ónefnt skjal"}</Text>
			{modified ? <ModifiedDot /> : null}

			<CloseButton onClick={onClose}>
				<FontAwesomeIcon icon={faWindowClose} />
			</CloseButton>
		</Outer>
	);
};
