import React from 'react'
import Todo from "../todo/Todo.component"
import { useSelector,connect } from 'react-redux'
import './Todos.styles.scss'
const Todos = ({mode,todoInEteting}) => {

  const storeTodos = useSelector(state=>state.todos.todos)

  
  return (
    <div>

      {
      storeTodos.length >0?
      storeTodos
      .filter(todo =>{
        if (mode==="done") 
          return todo.done !== true 
        if(mode==="edit") {
          return todo.id === todoInEteting.id
        }
        return todo
      })
      .map(({id,title,done}) => <Todo key={id} id={id} title={title} done={done} /> )
    :
    (<div className='no-todos'>
      <h2> no todo </h2>
    </div>)
    }

    </div>
  )
}
const mapStateToProps = ({mode:{mode},todos:{todoInEteting}})=>({
  mode,
  todoInEteting
})

export default connect(mapStateToProps)(Todos)