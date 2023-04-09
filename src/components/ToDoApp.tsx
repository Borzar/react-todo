import { v4 as uuidv4 } from 'uuid'
import { TodoList } from './ToDoList'
import { ToDoAdd } from './ToDoAdd'
import { useState } from 'react'

export const ToDoApp = () => {
  const [todoInput, setTodoInput] = useState<any>('')
  const [todoList, setTodoList] = useState<any>([])

  const onHandleSubmit = (e: any) => {
    e.preventDefault()
  }

  const addTodoOnList = () => {
    setTodoList([
      { id: uuidv4(), name: todoInput, checked: false },
      ...todoList,
    ])
    setTodoInput('')
  }

  return (
    <div className='todo-app-container'>
      <ToDoAdd
        addTodoOnList={addTodoOnList}
        onHandleSubmit={onHandleSubmit}
        setTodoInput={setTodoInput}
        todoInput={todoInput}
      />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  )
}
