import React from "react";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { Outer, Avatar, AvatarContainer, Title } from "./styles";
import { LoaderBox } from "../../";
import { changeUserGender } from "../../../actions";

const Component = ({ gender, avatars, changeUserGender }: IProps) => {
	if ("male" === gender || "female" === gender) return null;
	return (
		<LoaderBox loading={gender === "loading"}>
			<React.Fragment>
				<Title>Veldu mynd fyrir aðganginn þinn</Title>
				<Outer>
					<AvatarContainer onClick={() => changeUserGender("male")}>
						<Avatar theme={{ url: avatars.male }} />
					</AvatarContainer>
					<AvatarContainer onClick={() => changeUserGender("female")}>
						<Avatar theme={{ url: avatars.female }} />
					</AvatarContainer>
				</Outer>
			</React.Fragment>
		</LoaderBox>
	);
};

const mapStateToProps = (state: StoreState) => state.auth.user;

export const PickGender = connect(mapStateToProps, { changeUserGender })(
	Component
);
