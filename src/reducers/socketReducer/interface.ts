import { SocketUser, Trophy } from "../../models";

export interface SocketState {
	connectedUsers: SocketUser[];
	trophy?: Trophy;
}
