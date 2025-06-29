import React from 'react'
import { useSelector, } from 'react-redux'
import { removeTodo, addTodo } from '../features/todo/todoSlice'

function Todos() {

  const todos = useSelector(state => state.todos)
  // useSelector value select karava mate kyak thi value select karava 
  const dispatch = dispatch();
  // dispatch value send karva mate use thay

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>

          </button>
        </li>

      ))}
    </>
  )
}

export default Todos    