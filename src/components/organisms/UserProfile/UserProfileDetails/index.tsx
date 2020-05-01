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
import userIcon from "./Michelin-5.jpg";

export default ({ avatar, name, points }: IProps) => {
	return (
		<Frame>
			<UserPictureContainer>
				<UserPicture src={userIcon} />
			</UserPictureContainer>
			<UserName>{name}</UserName>
			<PointsContainer>
				<Points points={points} whiteBG />
			</PointsContainer>
		</Frame>
	);
};
