import React from "react"
import {useDispatch, useSelector} from "react-redux"
// import saveToDoWithText from "./thunkFunctions/saveToDo"
// import {selectTodoIds} from "./memoizedSelectors/selectTodoIds"
import {addToDo} from "./reducer"

const selectTodos = state => state
// const selectTodoIds = state => state.map(todo => todo.id)

export const MyApp = () => {
    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)
    // const ids = useSelector(selectTodoIds)
    console.log(todos);

    const displayToDos = (data) => {
        return data.map((todo, index) => {
            return (
                <div key={index} style={{border: "2px solid red", padding: "10px", margin: "10px"}}>
                    <b>{index + 1}...</b>
                </div>
            )
        })
    }

    let counter = 1
    return (
        <>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <button onClick={() => dispatch(addToDo(`new to do ${counter++}`))}>Add</button>
            <div>
                {displayToDos(todos)}
            </div>
        </>
    )
}