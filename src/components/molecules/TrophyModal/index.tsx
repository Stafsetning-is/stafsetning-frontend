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
import { TROPHY_COLOR } from "./utils";

/**
 * Molecule that shows the trophy modal
 * This component returns null and thus is not visible
 * if no trophy is supplied in props
 *
 * If a trophy is given then it displayes as an flip card
 * with a flip card animation
 *
 * it is closed by calling the closeTrophyModal action
 */
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
					<FontAwesomeIcon
						icon={headingDecoration}
						color={TROPHY_COLOR}
					/>
					<TitleText>{trophy.title}</TitleText>
					<FontAwesomeIcon
						icon={headingDecoration}
						color={TROPHY_COLOR}
					/>
				</TopHeading>
				{trophy.old ? null : (
					<SubHeading>Þú fékkst ný verðlaun!</SubHeading>
				)}
				<DescriptionText>{trophy.description}</DescriptionText>
				{trophy.old ? null : (
					<BottomText>
						Verðlaunin þín eru geymd á þinni síðu. Þú getur unnið
						inn fleiri verðlaun með góðum árangri.
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
