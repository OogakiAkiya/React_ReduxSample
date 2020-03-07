import {combineReducers, createStore} from "redux";
import count from "./duck";
import message from "./duck2"

const reducer=combineReducers({count,message})
export default createStore(reducer);

