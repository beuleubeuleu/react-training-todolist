import React from "react";
import {Task} from "./Task";
import "./TasksList.css";
import {TaskType} from "../models/TaskType";


type TasksListProp = {
    list: TaskType[]
    deleteTask: (taskId: number) => void
}

export const TasksList = ({list, deleteTask}: TasksListProp) => {
    return (
        <ul className={"tasksList-container"}>
            {list.map((i: TaskType) => (
                <Task key={i.id} task={i} deleteTask={deleteTask}/>
            ))}
        </ul>
    )
}