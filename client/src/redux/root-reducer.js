import { combineReducers } from "redux";
import todosReducer from './todos/todos-reducer'
import modeReducer from "./mode/mode-reducer";


const  rootReducer = combineReducers({
    todos : todosReducer ,
    mode :modeReducer

})

export default rootReducer