import React from "react";
import { Outer, Info, Plus } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { IProps } from "./interface";

/**
 * Special tab to create a new file
 */
export default ({ onClick, verbose }: IProps) => {
	const text = verbose ? "Búa til æfingu" : "";
	return (
		<Outer onClick={onClick}>
			<Info>{text}</Info>
			<Plus>
				<FontAwesomeIcon icon={faPlus} />
			</Plus>
		</Outer>
	);
};
