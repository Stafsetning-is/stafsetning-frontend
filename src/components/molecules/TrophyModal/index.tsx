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
import { faTrophy, faTimes, faLock } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { closeTrophyModal } from "../../../actions";

const Component = ({ trophy, closeTrophyModal }: IProps) => {
	if (!trophy) return null;

	const headingDecoration = trophy.locked ? faLock : faTrophy;

	return (
		<Outer>
			<FlipCard>
				<CloseIcon onClick={closeTrophyModal}>
					<FontAwesomeIcon icon={faTimes} />
				</CloseIcon>
				<TopHeading>
					<FontAwesomeIcon icon={headingDecoration} color="#fbc600" />
					<TitleText>{trophy.title}</TitleText>
					<FontAwesomeIcon icon={headingDecoration} color="#fbc600" />
				</TopHeading>
				{trophy.old ? null : <SubHeading>Þú fékkst nýjan bikar!</SubHeading>}
				<DescriptionText>{trophy.description}</DescriptionText>
				{trophy.old ? null : (
					<BottomText>
						Bikararnir þínir eru geymdir á þinni síðu. Þú getur unnið inn fleiri
						bikara með góðum árangri.
					</BottomText>
				)}
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
