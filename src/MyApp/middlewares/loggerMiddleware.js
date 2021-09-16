import {constants} from "../constants";

export const loggerMiddleware = storeAPI => next => action => {
    // console.log('dispatching', action)
    // console.log('next state', storeAPI.getState())
    if (action.type === constants.addTodo) {
        setTimeout(() => {
            // console.log("I've added to do")
            next(action)
        }, 2000);
    }
    return
}