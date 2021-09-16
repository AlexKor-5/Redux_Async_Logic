import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from "./reducer"
// import {logStore} from "./enchancers/logStore"
// import {loggerMiddleware} from "./middlewares/loggerMiddleware"
// import {loggerMiddlewareSecond} from "./middlewares/loggerMiddlewareSecond"
import thunkMiddleware from 'redux-thunk'

const composedEnhancerMiddleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)
const store = createStore(reducer, composedEnhancerMiddleware)
export default store