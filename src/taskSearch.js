import React from "react";

const TaskSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search Tasks"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default TaskSearch;
