import React from "react";

const TaskForm = ({ task, setTask, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="task"
        value={task}
        placeholder="Add Task item"
        onChange={(e) => setTask(e.target.value)}
      />
      <input type="submit" value="Add" name="add" />
    </form>
  );
};

export default TaskForm;
