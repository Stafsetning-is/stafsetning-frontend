import React from "react";
import {
	Inner,
	Name,
	ViewCount,
	IconContainer,
	RightContainer,
} from "./styles";
import { IProps } from "./interface";
import { TableRow } from "../../../../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Bar from "../CounterBar";
export default ({ fileName, counter, countRatio }: IProps) => {
	return (
		<TableRow>
			<Inner>
				<Name>{fileName}</Name>
				<RightContainer>
					<Bar ratio={countRatio} />
					<ViewCount>
						{counter}
						<IconContainer>
							<FontAwesomeIcon icon={faUserEdit} />
						</IconContainer>
					</ViewCount>
				</RightContainer>
			</Inner>
		</TableRow>
	);
};
