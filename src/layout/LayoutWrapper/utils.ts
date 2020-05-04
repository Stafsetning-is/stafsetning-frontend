import { AuthLevels } from "../../services";

export const SIGNED_IN_USER_LEVELS: AuthLevels[] = [
	"admin",
	"user",
	"pending-admin-invite",
];
export const GUEST: AuthLevels = "guest";
export const ADMIN: AuthLevels = "admin";
