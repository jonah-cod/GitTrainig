import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './todo'
     




const Todos = () => {
    const {todos} =  useSelector(state => state)
    
    return (
        <div className="todos">
            {todos.length? todos.map(todo=>(<Todo key={todo.id} todo={todo}/>)
                
            ): <h4>Your todos will appear here!</h4>}
            
            
        </div>
    )
}

export default Todos
