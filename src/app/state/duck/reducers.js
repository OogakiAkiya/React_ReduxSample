import * as type from './types'
import { combineReducers } from "redux";

const initializeState={
    count:0
}


//注意
//combineReducersでreducerをまとめdispatchを呼ぶと両方のreducerが呼ばれる
function counter(state=initializeState,action){
    switch (action.type) {
        case type.ADD:return {
            count:state.count+1
        };
        case type.DELETE:return{
            count:state.count-1
        };
        default: return state;
    }
}

export default counter;