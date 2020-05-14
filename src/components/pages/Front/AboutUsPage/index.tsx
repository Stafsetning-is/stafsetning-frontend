import React from "react";
import {
	Heading,
	Content,
	MailtoLink,
	DeveloperImage,
	DeveloperWrapper,
	Developer,
	Wrapper,
} from "./styles";
import { NJALL, JULIA, GABRIEL, NANNA, KJARTAN } from "../../../../static";
import { PAGE_TEXT } from "./utils";

export default () => {
	return (
		<React.Fragment>
			<Heading>UM OKKUR</Heading>
			<Content>{PAGE_TEXT}</Content>
			<Content>
				Endilega{" "}
				<MailtoLink href="mailto:gabriel.sighvatsson@gmail.com">
					hafðu samband!
				</MailtoLink>
			</Content>
			<Content>Þróunaraðilar:</Content>
			<Wrapper>
				<DeveloperWrapper>
					<DeveloperImage theme={NJALL}></DeveloperImage>
					<Developer>Njáll</Developer>
				</DeveloperWrapper>
				<DeveloperWrapper>
					<DeveloperImage theme={JULIA}></DeveloperImage>
					<Developer>Júlía</Developer>
				</DeveloperWrapper>
				<DeveloperWrapper>
					<DeveloperImage theme={GABRIEL}></DeveloperImage>
					<Developer>Gabríel</Developer>
				</DeveloperWrapper>
				<DeveloperWrapper>
					<DeveloperImage theme={NANNA}></DeveloperImage>
					<Developer>Natalía</Developer>
				</DeveloperWrapper>
				<DeveloperWrapper>
					<DeveloperImage theme={KJARTAN}></DeveloperImage>
					<Developer>Kjartan</Developer>
				</DeveloperWrapper>
			</Wrapper>

			{/* TODO
            TOS, contact, report a bug, use of cookies */}
		</React.Fragment>
	);
};
