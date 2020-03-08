import React from "react";
import { IProps } from "./interface";
import { TopBar, TitleText, TitleElement, SecondaryTitle } from "./styles";

export const PracticeFinished = ({}: IProps) => {
	return (
		<React.Fragment>
			<TitleText>
				<TitleElement>Kalli for ut i bud. Ng og nk</TitleElement>
			</TitleText>
			<SecondaryTitle>
				<TitleElement>29 februar 2020</TitleElement>
			</SecondaryTitle>
			<TopBar>
				<p>Vel gert! Æfingin skapar meistarann</p>
			</TopBar>
		</React.Fragment>
	);
};
