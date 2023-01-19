import React from "react";
import "./Task.css";

interface PropType {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

type TaskProps = {
    task: PropType
};

export const Task = ({task}: TaskProps) => {
  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={task.done} />
          <span className="checkmark"></span>
        </label>
        <p>{task.title}"</p>
      </div>
      <div className="task-actions">
        <button onClick={() => console.log("edit")}>Edit</button>
        <button onClick={() => console.log("delete")}>Delete</button>
      </div>
    </div>
  );
};
