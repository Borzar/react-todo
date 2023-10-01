import { Card, Input, Button, Space, Form } from 'antd';

export const ToDoAdd = ({
  addTodoOnList,
  onHandleSubmit,
  todoInput,
  setTodoInput,
}: any) => {
  return (
    <Card>
      <form onSubmit={onHandleSubmit} >
        <Space>
          <Input
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
            placeholder='type a todo'
          />
          <Button
            type='primary'
            disabled={todoInput.length === 0}
            htmlType="submit"
          >
            Add
          </Button>

        </Space>
      </form>
    </Card>
  )
}
