export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
  // setTask - It is called with a new value for task whenever you want to change its value.
  // setTasklist - it is used to update the list of tasks(adding a new task/removing/editing an existing task).


  const handleEdit = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id);  // item that should be edited
    setTask(selectedTask);
  }

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !== id);    // Delete item (OR can also say, show all items except the deleted one)
    setTasklist(updatedTaskList);
  }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
        </div>
        <ul>
            { tasklist.map((todo) => (
                <li key={todo.id}>
                    <p>
                        <span className="name">{todo.name}</span>
                        <span className="time">{todo.time}</span>
                    </p>
                    <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                    <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                </li>
            ))}
        </ul>
    </section>
  )
}
