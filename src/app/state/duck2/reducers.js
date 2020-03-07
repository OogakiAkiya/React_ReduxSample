import * as types from './types'

const initializeState={
    message:''
}

function message(state=initializeState,action) {
    switch (action.type) {
        case types.CHANGE:return{
            message:action.message
        };
        case types.SHOW:return state;
        default:return state;
    }
}

export default message;