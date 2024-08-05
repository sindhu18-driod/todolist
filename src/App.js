import "./styles.css";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; // Prevent adding empty tasks
    const newTask = {
      text: task,
      isDone: false,
      isEditing: false,
    };
    setTodos([...todos, newTask]);
    setTask("");
  };

  const deleteHandler = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
  };

  const editHandler = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isEditing: true } : todo
    );
    setTodos(newTodos);
  };

  const saveHandler = (index, newText) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText, isEditing: false } : todo
    );
    setTodos(newTodos);
  };

  const cancelEdit = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isEditing: false } : todo
    );
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Add Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <hr />
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredTodos.map((todo, index) => (
          <div key={index}>
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  defaultValue={todo.text}
                  onBlur={(e) => saveHandler(index, e.target.value)}
                />
                <button onClick={() => cancelEdit(index)}>Cancel</button>
              </>
            ) : (
              <h4
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.text}
                <button onClick={() => toggleDone(index)}>
                  {todo.isDone ? "Undo" : "Done"}
                </button>
                <button onClick={() => editHandler(index)}>Edit</button>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </h4>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
