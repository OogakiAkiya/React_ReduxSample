import * as type from './types'

function changeAction(message) {
    return {type:type.CHANGE,message:message};
}
function showAction() {
    return{type:type.SHOW};
}

export default {
    changeAction,
    showAction
}