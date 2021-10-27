import {ADD_TODO, DELETE_TODO, MARK_COMPLETE, UNMARK_COMPLETE} from '../types'

export const add_todo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const delete_todo = (id)=>{
    return{
        type: DELETE_TODO,
        payload: id,
    };
};

export const mark_complete = (id)=>{
    return{
        type: MARK_COMPLETE,
        payload: id,
    };
};

export const unmark_complete = (id)=>{
    return{
        type: UNMARK_COMPLETE,
        payload: id,
    };
};