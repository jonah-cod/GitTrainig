import React from 'react'
import Form from './components/form'
import Todos from './components/todos'
import './app.css'

const App = () => {
    return (
        <div className="App">
            <Form/>
            <Todos/>
        </div>
    )
}

export default App
