import { ActionTypes } from "../types";
import socket from "socket.io-client";
import store from "../../store";
import { CURRENT_USERS, LOG_IN } from "./utils";
import { SocketUser } from "../../models";
import { SetActiveUsersAction } from "./interface";

const SOCKET_URL = "https://stafs-api.herokuapp.com";
const io = socket(SOCKET_URL);

io.on(CURRENT_USERS, (data: SocketUser[]) => {
	store.dispatch<SetActiveUsersAction>({
		type: ActionTypes.setActiveUsers,
		payload: data,
	});
});

export function emitLogin(id: string) {
	io.emit(LOG_IN, {
		_id: id,
	});
}

export * from "./interface";
