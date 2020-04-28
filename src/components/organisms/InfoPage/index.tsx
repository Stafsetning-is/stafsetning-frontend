import React from "react";
import {
	Outer,
	MessageContainer,
	IconContainer,
	TextContainer,
	TitleContainer,
	ParagraphContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrophy,
	faExclamationTriangle,
	faFrog,
} from "@fortawesome/free-solid-svg-icons";
import { IProps } from "./interface";

export const InfoPage = ({ text, title, type, children }: IProps) => {
	const icon = (() => {
		switch (type) {
			case "error":
				return faExclamationTriangle;
			case "not-found":
				return faFrog;
			case "success":
				return faTrophy;
		}
	})();

	return (
		<Outer>
			<MessageContainer>
				<IconContainer>
					<FontAwesomeIcon icon={icon} />
				</IconContainer>
				<TextContainer>
					<TitleContainer>{title}</TitleContainer>
					<ParagraphContainer>{text}</ParagraphContainer>
				</TextContainer>
			</MessageContainer>
			{children ?? null}
		</Outer>
	);
};
