import {addTodo} from "../actions"
// import fetchToDos from "./fetchToDos"
import {v4 as uuidv4} from 'uuid';

export default function saveToDoWithText(dataText = '') {
    return async function saveToDo(dispatch, getState) {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: "POST",
            body: JSON.stringify({
                title: dataText,
                id: uuidv4()
            })
        })
        dispatch(addTodo(dataText))
        console.log(await response.json());
    }
}