import React, { useState } from "react";

const TaskItem = ({
  todo,
  index,
  deleteHandler,
  updateHandler,
  toggleDoneHandler,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.text);

  const saveHandler = () => {
    updateHandler(index, newTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span
          style={{ textDecoration: todo.done ? "line-through" : "none" }}
          onClick={() => toggleDoneHandler(index)}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => deleteHandler(index)}>Delete</button>
      {isEditing ? (
        <button onClick={saveHandler}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default TaskItem;
