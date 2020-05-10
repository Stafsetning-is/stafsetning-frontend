import styled from "styled-components";

export const Blinker = styled.span`
	animation: blink-animation 1s steps(5, start) infinite;
	-webkit-animation: blink-animation 2s steps(5, start) infinite;
	transition: opacity 0.3s;
	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
	@-webkit-keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
	font-family: "Press Start 2P", cursive;
`;

export const ActionContainer = styled.div`
	display: flex;
	margin-top: 10px;
	box-sizing: border-box;
	flex-direction: column;
	width: 100%;
`;

export const Action = styled.div`
	font-family: "Press Start 2P", cursive;
	color: #ff0066;
	:hover {
		text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
	}
	cursor: pointer;
`;

export const Inner = styled.div`
	position: fixed;
	z-index: 100;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: 0.5s;
`;

export const Image = styled.div`
	width: 70%;
	height: 20px;
	padding-bottom: 65%;
	border: 10px solid #00ffaa;
	box-sizing: border-box;
	border-radius: 50%;
	${(props) =>
		props.theme.talking
			? `
			transition: 0.5s;
			transition: background-image 0s !important;
			background-image: url(${props.theme.url});
			animation: mouth-animation 0.9s steps(5, start) infinite;
			-webkit-animation: mouth-animation 0.9s steps(5, start) infinite;
			@keyframes mouth-animation {
				to {
					background-image: url(${props.theme.openMouth});
				}
			}
			@-webkit-keyframes mouth-animation {
				to {
					background-image: url(${props.theme.openMouth});
				}
			}
		`
			: `
			transition: 0s;
			background-image: url(${props.theme.url});
	`}

	background-size: cover;
	box-shadow: 0px 0px 25px rgba(0, 170, 110, 0.925);
`;

export const Text = styled.div`
	padding: 30px;
	background: #f8f8f8;
	color: #333;
	font-family: "Press Start 2P", cursive;
	border: 5px solid #6600ff;
	box-shadow: 0px 0px 15px rgba(100, 0, 153, 0.6);
	border-radius: 5px;
	font-size: 20px;
	margin-top: 0px;
	line-height: 1.3;
	position: relative;
	transition: 0.5s;
	pointer-events: auto;
`;

export const ArrowUp = styled.div`
	width: 0;
	height: 0px;
	border-left: 35px solid transparent;
	border-right: 35px solid transparent;
	border-bottom: 35px solid #6600ff;
	position: absolute;
`;

export const Outer = styled.div`
	z-index: 100;
	position: fixed;
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	transition: 0.5s;
	${(props) =>
		props.theme.small
			? ` 
			pointer-events: none;
			${Inner} {
				height: 400px;
				width: 100px;
				right: 4px;
				bottom: 10px;
				flex-direction: column-reverse;
			}
			${Image} {
				border-width: 4px;
				width: 80%;
				padding-bottom: 75%;
			}
			${Text} {
				margin-right: 280px;
				width: 250px;
			}
			${ArrowUp} {
				bottom: 0px;
				left: 90%;
				transform: translateX(-40%) translateY(100%) rotateX(180deg);
				border-left: 15px solid transparent;
				border-right: 15px solid transparent;
				border-bottom: 15px solid #6600ff;
			}
	
	`
			: ` 
			${ArrowUp} {
				top: 0;
				left: 50%;
				transform: translateX(-50%) translateY(-100%);
			}
			${Inner}{ 
				height: 5% !important;
				padding-bottom: 4%;
				left: 50%;
				top: 20%;
				transform: translateY(-100%) translateX(-50%);
			}
			${Text}{
				margin-right: 20px;
			}
		z-index: 100;
		-o-backdrop-filter: blur(5.5px);
		-ms-backdrop-filter: blur(5.5px);
		-moz-backdrop-filter: blur(5.5px);
		-webkit-backdrop-filter: blur(5.5px);
		backdrop-filter: blur(5.5px);
	
	`}
`;
