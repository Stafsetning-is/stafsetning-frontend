import { SocketUser } from "../../models";

export interface SocketState {
	connectedUsers: SocketUser[];
}
