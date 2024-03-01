export const AddTask = ({tasklist, setTasklist, task, setTask}) => {
  const handleSubmit = (e) => {
    e.preventDefault();         // Prevent the default form submission behavior

    if(task.id){        // if id is there, it means we are editing
        const date = new Date();
        const updateTasklist = tasklist.map((todo) => (
            // todo.id - item which we are editing. task.id - item which is present in list
            todo.id === task.id ? {id: task.id, 
                                   name: task.name, 
                                   time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
        ));
        setTasklist(updateTasklist)
        setTask({});                // to clear the input after clicking edit

    }else{              // if nothing, it means we are about to add
        const date = new Date();
        const newTask = {
        id: date.getTime(), 
        name: e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
        setTasklist([...tasklist, newTask]);
        setTask({});                        // to clear the input after clicking add
    }              
  }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name= "task" 
                   value = {task.name || ""} autoComplete="off" placeholder="add task" 
                   maxLength="25" onChange= {e => setTask({...task, name: e.target.value})} />
            <button type="submit">{task.id ? " Update" : "Add"}</button>
        </form>
    </section>
  )
}
