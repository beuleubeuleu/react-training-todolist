import React        from "react";
import { Task }     from "./Task";
import "./TasksList.css";
import { TaskType } from "../models/TaskType";


type TasksListProp = {
  list: TaskType[]
  deleteTask: (taskId: number) => void
  editTask: (taskId: number) => void
  updateTaskState: (taskId: number) => void
}

export const TasksList = ({ list, deleteTask, editTask, updateTaskState }: TasksListProp) => {
  return (
      <ul className={ "tasksList-container" }>
        { list.map((i: TaskType) => (
            <Task key={ i.id } task={ i } deleteTask={ deleteTask } editTask={ editTask } updateTaskState={ updateTaskState}/>
        )) }
      </ul>
  )
}