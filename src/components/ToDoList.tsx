export const TodoList = ({ setTodoList, todoList }: any) => {
  return (
    <div className='todo-app-list'>
      <ul style={{ padding: 0 }}>
        {todoList.map((todoItem: any) => (
          <li
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px',
              alignItems: 'center',
              backgroundColor: '#5C5C5C',
              borderRadius: '6px',
              margin: '4px',
            }}
            key={todoItem.id}
          >
            <input
              onChange={(e) => {
                todoItem.checked = e.target.checked
                setTodoList([...todoList])
              }}
              checked={todoItem.checked}
              type='checkbox'
            />
            <span
              style={{
                height: 'auto',
                overflow: 'auto',
                margin: '10px',
              }}
              className={todoItem.checked ? 'hasStyle' : ''}
            >
              {todoItem.name}
            </span>
            <button
              className='btn btn-danger'
              onClick={() =>
                setTodoList(
                  todoList.filter(
                    (filterTodoList: any) => filterTodoList.id !== todoItem.id
                  )
                )
              }
              type='button'
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
