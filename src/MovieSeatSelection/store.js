import {combineReducers, createStore} from "redux"
import SeatsReducer from './Reducer/SeatsReducer'

const reducer = combineReducers({
    SeatsReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;