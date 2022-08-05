import React, { useEffect, useState } from 'react'
import FeatherIcon from "feather-icons-react";
import './todo-form.styles.scss'
import { addTodo ,editTodo} from '../../redux/todos/todos-actions';
import { connect } from 'react-redux';
import {toDoneMode,toNormalMode} from '../../redux/mode/mode-actions'

const TodoForm = ({addTodo,mode,toDoneMode,toNormalMode,todoInEteting,editTodo}) => {
 
  const [title,setTitle] = useState("")
  
 
useEffect(()=>{
  setTitle(todoInEteting.title)
},[todoInEteting])

  const handelClick = ()=>{

    const todo = {
      id : Date.now(),
      title ,
      done:false
    }

  addTodo(todo)
  setTitle("")
  }


  const changeMode  = ()=>{
    if (mode ==="normal") {
      toDoneMode()
      
    } else {
      toNormalMode()
     
    }
  }


  const handelEdit = ()=>{
    const newTodo = {
      id:todoInEteting.id,
      title,
      done:todoInEteting.done
    }


    editTodo(newTodo)
    setTitle("")
    toNormalMode()
  }

  return (
    <div className='form-container'>
        
       { mode=== "edit"? null: 
        (<div className="icon-form">
            <FeatherIcon 
            icon="circle"
            size={20} 
            style={mode==="done"? { color:"#3bc53b"}:{}} 
            onClick={changeMode}
            
            />
        </div>)}

        <div className="form">
            <input 
            type="text"
            value={title}
            className='form-input'
            placeholder='add todo ...'
            onChange={e=> setTitle(e.target.value)}
             
             />
             {
              mode==="edit"?
           ( <button 
            onClick={handelEdit} 
            className='form-button'

            disabled={!title.trim()}
            
            > EDIT</button>)
            :
            (<button 
            onClick={handelClick} 
            className='form-button'
            disabled={!title.trim()}
            
            > ADD</button>)}

        </div>

        
    </div>
  )
}


const mapDispatchToProps = dispatch =>({
  addTodo : todo =>dispatch(addTodo(todo)),
  toDoneMode   : ()=> dispatch(toDoneMode()),
  toNormalMode : ()=> dispatch(toNormalMode()),
  editTodo: todo=>dispatch(editTodo(todo))
})
const mapStatechToProps = ({mode:{mode},todos:{todoInEteting}}) =>({
  mode ,
  todoInEteting
})
export default connect(mapStatechToProps,mapDispatchToProps)(TodoForm)