import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  todos,
  deleteHandler,
  updateHandler,
  toggleDoneHandler,
}) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TaskItem
          key={index}
          todo={todo}
          index={index}
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
          toggleDoneHandler={toggleDoneHandler}
        />
      ))}
    </div>
  );
};

export default TaskList;
