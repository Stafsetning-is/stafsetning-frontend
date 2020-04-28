import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import {
	Outer,
	MessageContainer,
	TrophyContainer,
	TextContainer,
	TitleContainer,
	ParagraphContainer,
} from "./styles";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { UIButton } from "../../";
import { IProps } from "./interface";
import { Redirect, NavLink } from "react-router-dom";

const Component = ({ exerciseId }: IProps) => {
	if (!exerciseId) return <Redirect to="/app/exercise-editor/" />;
	return (
		<Outer>
			<MessageContainer>
				<TrophyContainer>
					<FontAwesomeIcon icon={faTrophy} />
				</TrophyContainer>
				<TextContainer>
					<TitleContainer>
						Vel gert! Æfingin er nú sýnileg nemendum
					</TitleContainer>
					<ParagraphContainer>
						Nú getur þú skoðað æfinguna sem nemandi og séð hvernig hún kemur út
						með því að ýta á takkann hér fyrir neðan. Til þess að breyta
						textanum, erfiðleikastigi, skiptingu textans í búta, eða jafnvel búa
						til nýja æfingu þá er hægt að ýta á „halda áfram“ hér fyrir neðan.
					</ParagraphContainer>
				</TextContainer>
			</MessageContainer>
			<div>
				<NavLink to={`/exercise/practice/${exerciseId}`}>
					<UIButton label="Skoða æfingu sem nemandi" onClick={() => {}} />
				</NavLink>
				<NavLink to="/app/exercise-editor/">
					<UIButton label="Halda áfram sem kennari" onClick={() => {}} />
				</NavLink>
			</div>
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => ({
	exerciseId: state.publisher.completedFileId,
});

export default connect(mapStateToProps)(Component);
