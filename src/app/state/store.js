import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import count from "./duck";
import message from "./duck2"
const init={
}


const reducer=combineReducers({count,message})
export default createStore(reducer,init,applyMiddleware(thunkMiddleware));

