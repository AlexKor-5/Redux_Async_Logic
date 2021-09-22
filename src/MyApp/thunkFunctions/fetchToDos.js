import {todosLoaded} from "../actions"

export default function fetchToDos(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => dispatch(todosLoaded(json)))
        .catch(e => console.error(e))
}
