import styled from "styled-components";

export const Frame = styled.div`
	width: 100%;
	margin-top: 125px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const UserPictureContainer = styled.div`
	display: block;
	width: 25%;
	border-radius: 50%;
	overflow: hidden;
`;

export const UserPicture = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	cursor: pointer;
	:hover {
		transform: rotateY(180deg);
	}
`;

export const UserName = styled.p`
	padding: 50px 0 0 0;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #333;
`;

export const PointsContainer = styled.p`
	padding: 15px 0 75px 0;
`;
