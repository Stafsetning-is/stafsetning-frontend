export interface IProps {
	children: any;
	service: "log-in" | "sign-up";
	isAuth: boolean;
	to: string;
}
