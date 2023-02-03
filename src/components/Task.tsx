import React        from "react";
import "./Task.css";
import { TaskType } from "../models/TaskType";



type TaskProps = {
  task: TaskType
  deleteTask: (taskId: number) => void
  editTask: (taskId: number) => void
  updateTaskState: (taskId: number) => void
};

export const Task = ({ task, deleteTask, editTask, updateTaskState }: TaskProps) => {
  return (
      <li className="task-container">
        <div className="task-content">
          <label className="container">
            <input type="checkbox" checked={ task.done } onChange={ () => updateTaskState(task.id) }/>
            <span className="checkmark"></span>
          </label>
          <p>{ task.title }"</p>
        </div>
        <div className="task-actions">
          <button onClick={ () => editTask(task.id) }>Edit</button>
          <button onClick={ () => deleteTask(task.id) }>Delete</button>
        </div>
      </li>
  );
};
