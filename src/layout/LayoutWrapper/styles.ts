import styled from "styled-components";

export const MobileText = styled.div``;

export const Outer = styled.div`
	${MobileText} {
		display: none;
	}
	position: relative;
	@media (max-width: 999px) {
		${MobileText} {
			display: block;
			position: fixed;
			bottom: 0;
			box-sizing: border-box;
			padding: 20px;
			height: 90px;
			width: 100%;
			color: #333;
			font-size: 18px;
			background-color: #f8f8f8;
			border-radius: 12px 12px 0 0;
			box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.85);
			animation: bounce-in ease 0.5s;
			-webkit-animation: bounce-in ease 0.5s;
			-moz-animation: bounce-in ease 0.5s;
			-o-animation: bounce-in ease 0.5s;
			-ms-animation: bounce-in ease 0.5s;
			@keyframes bounce-in {
				0% {
					transform: translateY(100%);
				}
				100% {
					transform: translateY(0%);
				}
			}
			width: 100%;
			text-align: center;
			transition: 0.4s;
			:hover {
				height: 120px;
			}
			@-moz-keyframes bounce-in {
				0% {
					transform: translateY(100%);
				}
				100% {
					transform: translateY(0%);
				}
			}

			@-webkit-keyframes bounce-in {
				0% {
					transform: translateY(100%);
				}
				100% {
					transform: translateY(0%);
				}
			}

			@-o-keyframes bounce-in {
				0% {
					transform: translateY(100%);
				}
				100% {
					transform: translateY(0%);
				}
			}

			@-ms-keyframes bounce-in {
				0% {
					transform: translateY(100%);
				}
				100% {
					transform: translateY(0%);
				}
			}
		}
	}
`;
