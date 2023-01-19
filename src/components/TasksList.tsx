import React from "react";
import {Task} from "./Task";
import "./TasksList.css";
import {TaskType} from "../models/TaskType";


type TasksListProp = {
    list: TaskType[]
}

export const TasksList = ({list}: TasksListProp) => {
    return (
        <div className={"tasksList-container"}>
            {
                list.map((i: TaskType) => {
                    return <Task task={i}/>
                })
            }
        </div>
    )
}