import {ADD_TODO, DELETE_TODO, MARK_COMPLETE} from '../types'

const initialState = {
    todos:[]
};


const todoReducers = (state = initialState, {type, payload})=>{
    switch (type) {
        case ADD_TODO:
            
            return {...state,  todos: [...state.todos, payload]};
        case DELETE_TODO:
            return {...state, todos: state.todos.filter((todo)=>todo.id!==payload)}
        case MARK_COMPLETE:
            
            return {...state, todos:state.todos.map(todo=>{

                if(todo.id === payload){
                    todo.isComplete = !todo.isComplete;
                    
                }
                return todo;
            })}
        default:
            return state;
    }
    
}

export default todoReducers;