export const ToDoAdd = ({
  addTodoOnList,
  onHandleSubmit,
  todoInput,
  setTodoInput,
}: any) => {
  return (
    <form className='todo-app-add' onSubmit={onHandleSubmit}>
      <h2 style={{ padding: '8px' }}>React Todos </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '8px',
          gap: '8px',
        }}
      >
        <input
          className='form-control'
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
          placeholder='type a todo'
        />
        <button
          style={{ width: '100px' }}
          className='btn btn-primary'
          disabled={todoInput.length === 0}
          onClick={addTodoOnList}
        >
          Add
        </button>
      </div>
    </form>
  )
}
