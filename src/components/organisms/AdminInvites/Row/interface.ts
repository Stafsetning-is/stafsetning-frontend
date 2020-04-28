import { User } from "../../../../models";

export interface IProps extends User {
	requestAdminStatusForUser: (id: string) => void;
}
