import React from 'react'
import FeatherIcon from 'feather-icons-react'
import "./Todo.styles.scss"
import { removeTodo,changeStatus } from '../../redux/todos/todos-actions'
import { connect } from 'react-redux'
import { toEditMode } from '../../redux/mode/mode-actions'

const Todo = ({id,title,done,removeTodo,changeStatus,toEditMode}) => {


  const handelRemove = ()=>{
   removeTodo(id)
  }

  const handelEditing = ()=>{
    const todo = {id,title,done};
    toEditMode(todo)

  }


  

  return (
    <div className="todos-todo ">
     

        <div className="todos-todo_icon" >
          <FeatherIcon 
          style={done? { color:"#3bc53b"}:{}} 
          icon={done ?"check-circle" :"circle"}
          onClick={()=>changeStatus(id)}
          />
        </div>

        <div className="todos-todo_text" style={done ? {textDecoration: "line-through",
    color:" #a8a3ba"
} :{}}  > {title} </div>


        <div className="todos-todo_cta">
         
          <div className="todos-todo_cta-edit">
            <FeatherIcon 
            icon="edit" 
            size="20"
            onClick={handelEditing}
            
            />
          </div>

        <div className="todos-todo_cta-delete" >
          <FeatherIcon 
          icon="trash-2" 
          size="20"
          onClick={handelRemove}
          
          
          />

        </div>

        </div>

  </div>
  )
}
const mapDispatchToProps = dispatch =>({
  removeTodo : id => dispatch(removeTodo(id)),
  changeStatus :   id => dispatch(changeStatus(id)),
  toEditMode: todo => dispatch(toEditMode(todo))

})

export default connect(null,mapDispatchToProps)(Todo)