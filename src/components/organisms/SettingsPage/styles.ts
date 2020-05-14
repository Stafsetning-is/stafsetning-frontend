import styled from "styled-components";

export const Outer = styled.div`
	width: 600px;
	margin: 0 auto;
	color: #00ffcc;
	position: relative;
`;

export const PasswordTitle = styled.div`
	font-size: 20px;
	color: #666;
	// margin-bottom: 10px;
	// border-bottom: 1px dashed #999;
`;

export const SuccessContainer = styled.div`
	margin: 40px 0;
	color: #666;
	svg {
		margin-right: 20px;
		color: #00ffaa;
		font-size: 27px;
		border-radius: 50%;
		box-sizing: border-box;
	}
	border: #cecece 1px dotted;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	background-color: rgba(0, 255, 170, 0.2);
	border-radius: 6px;
	padding: 25px;
	box-sizing: border-box;
	animation: fadeIn ease 1s;
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const SuccessInner = styled.div`
	display: flex;
	align-items: center;
`;

export const ChangeBackSpan = styled.span`
	color: #333;
	font-width: 500;
	margin-left: 10px;
	transition: 0.3s;
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
`;
