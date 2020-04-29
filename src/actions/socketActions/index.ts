import { ActionTypes } from "../types";
import { URL } from "../../api";
import socket from "socket.io-client";
import store from "../../store";
import { CURRENT_USERS, LOG_IN, FINISH_EXERCISE, UPDATE_POINTS } from "./utils";
import { SocketUser } from "../../models";
import { SetActiveUsersAction, ChangeUserPointsAction } from "../";

const io = socket(URL);

io.on(CURRENT_USERS, (data: SocketUser[]) => {
	store.dispatch<SetActiveUsersAction>({
		type: ActionTypes.setActiveUsers,
		payload: data,
	});
});

io.on(UPDATE_POINTS, (data: number) => {
	store.dispatch<ChangeUserPointsAction>({
		type: ActionTypes.changeUserPoints,
		payload: data,
	});
});

export function emitLogin(id: string) {
	io.emit(LOG_IN, {
		_id: id,
	});
}

export function emitFinishExercise(id: string) {
	io.emit(FINISH_EXERCISE, {
		_id: id,
	});
}
export * from "./interface";
