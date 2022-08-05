import React from 'react'
import './todo-list.styles.scss'
import TodoForm from '../components/todo-form/todo-form.component'
import Todos from '../components/todos/Todos.component'


const TodoList = () => {


  return (
    <div className='todo-list'>

        <TodoForm />
        <Todos  />
    </div>
  )
}

export default TodoList