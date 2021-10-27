import todoReducers from './reducers/todoReducers'
import {createStore} from 'redux'

const store = createStore(todoReducers
    );
    

export default store