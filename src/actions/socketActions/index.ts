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

/**
 * This file contains all the actions that
 * the sockets have to manipulate the global redux state
 * The socket have a single reducer where it's data is stored
 *
 * This file is unusual compared to other action files
 * as this one has three logical parts
 *
 * The first part is are symple sync actions
 * that sockets can use to dispatch data
 *
 * the second part are socket event listeners
 * that dispatch an event from part one when those
 * events are received
 *
 * The third one are functions that
 * can be used in our application but the do
 * not directly manipulate the redux state,
 * rather they emit an event via the socket
 * Most definately these emitted events will
 * receive an event back via the second part
 * but there is no logical correlation
 * in the front end code that connects the
 * second part to the second one
 */

// inits the socket
const io = socket(URL);

/**
 * PART 1: ACTION CREATORS
 *
 * This part contains actions creaters that
 * return actions that directly manipulate
 * the socket reducer
 *
 * */

/**
 * Closes the trophy modal
 */
export function closeTrophyModal(): CloseSocketModalAction {
	// returns the action
	return {
		type: ActionTypes.closeTrophyModal,
		payload: null,
	};
}

/**
 * sets the trophy to be presented to ther user
 * @param trophy Trophy interface object
 */
export function setTrophy(trophy: Trophy): HandleNewTrophy {
	return {
		type: ActionTypes.handleNewTrophy,
		payload: trophy,
	};
}

/**
 * PART 2: SOCKET EVENT LISTENERS
 *
 * This part of the file has event listeners that
 * have call backs when events are received
 * and dispatches the relevant redux action
 * when the events are received
 *
 */

/**
 * when info about current users are received
 * then we call the SetActiveUsersAction
 */
io.on(CURRENT_USERS, (data: SocketUser[]) => {
	store.dispatch<SetActiveUsersAction>({
		type: ActionTypes.setActiveUsers,
		payload: data,
	});
});

/**
 * When the socket emits a new point count
 * to the user then we handle that
 * via the correct action
 */
io.on(UPDATE_POINTS, (data: number) => {
	store.dispatch<ChangeUserPointsAction>({
		type: ActionTypes.changeUserPoints,
		payload: data,
	});
});

/**
 * when we receive an event about a new trophy
 * then we add that as the current trophy
 * to display to user
 */
io.on(NEW_TROPHY, (data: Trophy) => {
	store.dispatch<HandleNewTrophy>(setTrophy(data));
});

/**
 * PART 3: SOCKET EVENT DISPATCHERS
 *
 * This part of the file contains
 * finctions that emit data via socket
 * to the backend
 */

/**
 * Emit an event to the backend notifying
 * the backend that a user has been logged in
 * @param id the users id
 */
export function emitLogin(id: string) {
	io.emit(LOG_IN, {
		_id: id,
	});
}

/**
 * Emits an event to the backend notifying
 * it that the logged in user has
 * completed an exercise
 * @param id the logged in user id
 */
export function emitFinishExercise(id: string) {
	io.emit(FINISH_EXERCISE, {
		_id: id,
	});
}

export * from "./interface";
