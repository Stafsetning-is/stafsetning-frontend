import React from "react";
import { Outer, Title, Icon, Inner } from "./styles";
import { IProps } from "./interface";
import { TrophyIcon } from "../../";

export const Trophy = ({ icon, title, locked, onClick }: IProps) => {
	return (
		<Outer onClick={onClick}>
			<Inner theme={{ locked }} onClick={onClick}>
				<Icon>
					<TrophyIcon icon={icon} />
				</Icon>
				<Title>{title}</Title>
			</Inner>
		</Outer>
	);
};
