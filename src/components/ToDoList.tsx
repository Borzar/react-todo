import { DeleteOutlined } from "@ant-design/icons"
import { Button, Card, Checkbox, List, Typography } from "antd"

 export const TodoList = ({ deleteTodo, setTodoList, todoList }: any) => {
   return (
     <Card>
      <List
        dataSource={todoList}
        renderItem={(item: any) => (
          <List.Item>
            <Checkbox
              onChange={(e) => {
                item.checked = e.target.checked
                setTodoList([...todoList])
              }}
            ></Checkbox>
            <Typography.Text
              className={item.checked ? 'hasStyle' : ''}
            >
              {item.name}
            </Typography.Text>
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              danger
              onClick={() => deleteTodo(item)}
            >
            </Button>
          </List.Item>
        )}
      />
    </Card>
  )
}
