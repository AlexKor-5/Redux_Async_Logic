import {constants} from "./constants";
import {v4 as uuidv4} from 'uuid';
import {initialTodos} from "./initialState";

export default function reducer(state = initialTodos, action) {
    switch (action.type) {
        case constants.addTodo:
            return [
                ...state,
                {
                    title: action.payload,
                    id: uuidv4()
                }
            ]
        case constants.todosLoaded:
            return action.payload
        default:
            return state
    }
}