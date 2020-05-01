import React from "react";
import { Outer, Title, Icon } from "./styles";
import { IProps } from "./interface";
import { TrophyIcon } from "../../";

export const Trophy = ({ icon, title }: IProps) => {
	return (
		<Outer>
			<Icon>
				<TrophyIcon icon={icon} />
			</Icon>
			<Title>{title}</Title>
		</Outer>
	);
};
