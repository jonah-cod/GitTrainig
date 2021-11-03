import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './todo'
import { useState } from 'react'
     




const Todos = () => {
    const {todos} =  useSelector(state => state)

    
    return (
        <div className="todos">
            <h3>My todos</h3>
            {todos.length? todos.map(todo=>(
                
            <Todo key={todo.id} todo={todo}/>
            )
                
            ): <h5>Your todos will appear here!</h5>}
            
            
        </div>
    )
}

export default Todos
