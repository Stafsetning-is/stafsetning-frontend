import React from "react";
import { Outer, Title, Description, Icon } from "./styles";
import { IProps } from "./interface";
import { TrophyIcon } from "../../";

export const Trophy = ({ icon, title, description }: IProps) => {
	return (
		<Outer>
			<Title>{title}</Title>
			<Icon>
				<TrophyIcon icon={icon} />
			</Icon>
		</Outer>
	);
};
