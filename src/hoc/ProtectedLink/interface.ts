export interface IProps {
    children: React.ReactNode;
    service: "log-in" | "sign-up";
    isAuth: boolean;
    to: string;
}
