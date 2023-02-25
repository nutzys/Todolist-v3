import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css';

const TodoList: React.FC<{todo: any[]}> = (props) => {
  return (
    <div>
      <ul>
        {props.todo.map(item => (
        <TodoItem 
        id={item.id}
        title={item.title}
        userId={item.userId}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList