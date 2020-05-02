import { ActionTypes } from "../types";
import { URL } from "../../api";
import socket from "socket.io-client";
import store from "../../store";
import {
	CURRENT_USERS,
	LOG_IN,
	FINISH_EXERCISE,
	UPDATE_POINTS,
	NEW_TROPHY,
} from "./utils";
import { SocketUser, Trophy } from "../../models";
import { SetActiveUsersAction, ChangeUserPointsAction } from "../";
import { CloseSocketModalAction, HandleNewTrophy } from "./interface";

const io = socket(URL);

// Action creators
export function closeTrophyModal(): CloseSocketModalAction {
	return {
		type: ActionTypes.closeTrophyModal,
		payload: null,
	};
}

export function setTrophy(trophy: Trophy): HandleNewTrophy {
	console.log("4", 4);
	return {
		type: ActionTypes.handleNewTrophy,
		payload: trophy,
	};
}

// socket events dispatching actions
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

io.on(NEW_TROPHY, (data: Trophy) => {
	store.dispatch<HandleNewTrophy>(setTrophy(data));
});

// functions that dispatch events via socket
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
