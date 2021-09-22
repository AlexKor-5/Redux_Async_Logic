import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Provider} from 'react-redux';
import {MyApp} from "./MyApp/MyApp";
import store from "./MyApp/store";
// import fetchToDos from "./MyApp/thunkFunctions/fetchToDos";
import {fetchToDos} from "./MyApp/reducer"

let destination = document.querySelector("#container");

store.dispatch(fetchToDos())

ReactDOM.render(
    <>
        <Provider store={store}>
            <MyApp/>
        </Provider>
    </>,
    destination
);