import * as type from './types'

const addAction=()=>({
    type: type.ADD
});

const deleteAction=(_id)=>({
    type: type.DELETE,
    id:_id
});

export default {
  addAction,
  deleteAction,
};