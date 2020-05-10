import styled from "styled-components";

const AVATAR_SIZE = 250;

export const Outer = styled.div`
	width: 600px;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
`;

export const Avatar = styled.div`
	height: 100%;
	width: 100%;
	background-image: url(${(props) => props.theme.url});
	background-size: cover;
	border-radius: 50%;
	cursor: pointer;
	opacity: 0.9;
	transition: 0.5s ease-out opacity;
`;

export const AvatarContainer = styled.div`
	height: ${AVATAR_SIZE}px;
	width: ${AVATAR_SIZE}px;
	:hover ${Avatar} {
		transform: rotateY(180deg);
		opacity: 1;
	}
`;

export const Title = styled.h1`
	font-weight: 400;
	color: #666;
	width: 100%;
	text-align: center;
	margin: 125px 0 75px 0;
`;
