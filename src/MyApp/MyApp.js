import React from "react"
import {useDispatch, useSelector} from "react-redux"
import saveToDoWithText from "./thunkFunctions/saveToDo"

const selectTodos = state => state

export const MyApp = () => {
    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)

    const displayToDos = (data) => {
        return data.map((todo, index) => {
            return (
                <div key={index} style={{border: "2px solid red", padding: "10px", margin: "10px"}}>
                    <b>{index + 1}...</b>{todo.title}
                </div>
            )
        })
    }

    let counter = 1
    return (
        <>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <button onClick={() => dispatch(saveToDoWithText(`new to do ${counter++}`))}>Add
            </button>
            <div>
                {displayToDos(todos)}
            </div>
        </>
    )
}