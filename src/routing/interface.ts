export interface IPage {
	route: string;
	// any used as I was unable to determine the built in type of React Components before mount
	component: any;
}

export interface IProps {
	pages: IPage[];
	modals: IPage[];
}
