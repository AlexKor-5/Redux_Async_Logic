import {constants} from "./constants";

export const addTodo = (text = "") => ({
    type: constants.addTodo,
    payload: text
})

export const todosLoaded = (value) => ({
    type: constants.todosLoaded,
    payload: value
})

