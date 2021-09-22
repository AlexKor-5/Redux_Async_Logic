import {v4 as uuidv4} from 'uuid';
import {initialTodos} from "./initialState";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchToDos = createAsyncThunk(
    'todo/toDoLoaded',
    async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        return response.json()
    }
)

export const addToDo = createAsyncThunk(
    'todo/sendTodo',
    async dataText => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: "POST",
            body: JSON.stringify({
                title: dataText,
                id: uuidv4()
            })
        })
        return response.json()
    }
)

const reducer = createSlice({
    name: 'todo',
    initialState: initialTodos,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchToDos.pending, (state, action) => {
                // change state when it is loading
            })
            .addCase(fetchToDos.fulfilled, (state, action) => {
                // making substitution when we get data
                return action.payload
            })
            .addCase(fetchToDos.rejected, (state, action) => {
                // change state when fetching is rejected
            })
            .addCase(addToDo.pending, (state, action) => {

            })
            .addCase(addToDo.fulfilled, (state, action) => {
                //change state when data is sent
                // console.log(action.payload)
                return [
                    ...state,
                    {
                        title: action.payload, // action.payload = response from fetch method
                        id: uuidv4(),
                        completed: false
                    }
                ]
            })
    }
})
export default reducer.reducer