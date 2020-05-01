import * as React from "react";
import { IProps } from "./interface";
import {
	Frame,
	UserName,
	UserPictureContainer,
	UserPicture,
	PointsContainer,
} from "./styles";
import { Points } from "../../../";
import PLACEHOLDER_IMG from "./Michelin-5.jpg";

export default ({ avatar, name, points }: IProps) => {
	return (
		<Frame>
			<UserPictureContainer>
				<UserPicture src={PLACEHOLDER_IMG} />
			</UserPictureContainer>
			<UserName>{name}</UserName>
			<PointsContainer>
				<Points points={points} whiteBG />
			</PointsContainer>
		</Frame>
	);
};
