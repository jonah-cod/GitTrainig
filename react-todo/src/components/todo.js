import React from 'react'
import { useDispatch } from 'react-redux'
import {delete_todo, mark_complete} from '../redux/actions/actions'

const Todo = ({todo}) => {
    const dispatch = useDispatch();
    //delete dispatch
const handleDelete = ()=>{
    dispatch(delete_todo(todo.id))
}

//mark done dispatch
const handle_Mark_Done = ()=>{
    dispatch(mark_complete(todo.id))
    
}

    return (
        <div className="todo">
        <h4 style={{textDecoration:todo.isComplete ? "line-through" : ""}}>{ todo.title}</h4>
        <div className="todoAction">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handle_Mark_Done} style={{background:todo.isComplete? "orangered": ""}}>{todo.isComplete? "Mark not Done": "Mark done"}</button>
        </div>
        </div>
    )
}

export default Todo
