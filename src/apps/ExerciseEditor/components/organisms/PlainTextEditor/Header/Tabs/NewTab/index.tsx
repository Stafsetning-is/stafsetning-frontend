import React from "react";
import { Outer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { IProps } from "./interface";

export default ({ onClick }: IProps) => {
	return (
		<Outer onClick={onClick}>
			<FontAwesomeIcon icon={faPlus} />
		</Outer>
	);
};
