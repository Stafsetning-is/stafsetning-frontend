import React from "react";
import {
	Outer,
	TopHeading,
	SubHeading,
	TitleText,
	DescriptionText,
	BottomText,
	CloseIcon,
} from "./styles";
import { FlipCard } from "../../";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { closeTrophyModal } from "../../../actions";

const Component = ({ trophy, closeTrophyModal }: IProps) => {
	if (!trophy) return null;
	return (
		<Outer>
			<FlipCard>
				<CloseIcon onClick={closeTrophyModal}>
					<FontAwesomeIcon icon={faTimes} />
				</CloseIcon>
				<TopHeading>
					<FontAwesomeIcon icon={faTrophy} color="#fbc600" />
					<TitleText>{trophy.title}</TitleText>
					<FontAwesomeIcon icon={faTrophy} color="#fbc600" />
				</TopHeading>
				<SubHeading>Þú fékkst nýjan bikar!</SubHeading>
				<DescriptionText>{trophy.description}</DescriptionText>
				<BottomText>
					Bikararnir þínir eru geymdir á þinni síðu. Þú getur unnið inn fleiri
					bikara með góðum árangri.
				</BottomText>
			</FlipCard>
		</Outer>
	);
};

const mapStatetoProps = (state: StoreState) => ({
	trophy: state.socket.trophy,
});

export const TrophyModal = connect(mapStatetoProps, { closeTrophyModal })(
	Component
);
