import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {add_todo} from '../redux/actions/actions'

const Form = () => {
const dispatch = useDispatch()

    const [title, setTitle] = useState("");

    const todo = {
        id: Math.floor(Math.random()*1000000),
        title,
        isComplete: false
    }
const handleSubmit=(e)=> {
    e.preventDefault();
    console.log(title);
    if(title!== ""){
        dispatch(add_todo(todo))
    }
    
    setTitle("")
}

    return (
        <div className="head">
           <h2>My Todo-List</h2>
            
            <form className="addTodo" onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Type a todo..." onChange={(e)=>{setTitle(e.target.value)}}/>
                <button type="submit">add</button>
            </form>
            
        </div>
    )
}

export default Form
