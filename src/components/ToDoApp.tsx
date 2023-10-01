import { v4 as uuidv4 } from 'uuid'
import { TodoList } from './ToDoList'
import { ToDoAdd } from './ToDoAdd'
import { useEffect, useState } from 'react'
import { Card, Col, Divider, Row } from 'antd';

type ToDoAppTypes = {
  id: string
  name: string
  checked: boolean
}

export const ToDoApp = () => {
  const [todoInput, setTodoInput] = useState<string>('')
  const [todoList, setTodoList] = useState<ToDoAppTypes[]>([])

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos))
    }
  }, [])

  const addTodoOnList = () => {
    const newTodo = { id: uuidv4(), name: todoInput, checked: false }
    const newTodos = [newTodo, ...todoList]
    setTodoList(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodoInput('')
  }

  const onHandleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    addTodoOnList()
  }

  const deleteTodo = (todoItem: any) => {
    const todoFilter = todoList.filter(
      (filterTodoList: any) => filterTodoList.id !== todoItem.id
    )
    setTodoList(todoFilter)
    localStorage.setItem('todos', JSON.stringify(todoFilter))
  }

  return (
      <Row justify='center'>
        <Col>
          <ToDoAdd
            addTodoOnList={addTodoOnList}
            onHandleSubmit={onHandleSubmit}
            setTodoInput={setTodoInput}
            todoInput={todoInput}
          />
          <Divider orientation="left" style={{ color: '#d9d9d9'}}>Mi Lista</Divider>
          <TodoList
            deleteTodo={deleteTodo}
            setTodoList={setTodoList}
            todoList={todoList}
          />
        </Col> 
      </Row>
  )
}
