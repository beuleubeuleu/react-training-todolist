import React, {useState} from "react";
import "./App.css";
import {TasksList} from "./components/TasksList";
import {TaskFormModal} from "./components/TaskFormModal";
import {Header} from "./components/Header";
import {data} from "./data/tasks";

const tasks = data

const App = () => {
    const title = "To do list";
    const taskToEdit: any = null;
    const [showForm, setShowForm] = useState(false)

    const updateTaskState = (taskId: number) => {
        console.error("I need to be implemented");
    };

    const addOrEditTask = (event: any, taskToEditId?: number) => {
        event.preventDefault();
        console.error("I need to be implemented");
    };

    const editTask = (taskId: number) => {
        console.error("I need to be implemented");
    };

    const deleteTask = (taskId: number) => {
        console.error("I need to be implemented");
    };

    return (
        <div className="main">
            <Header titre={title}/>

            <TasksList list={data}/>
            <button
                className="add-task-btn"
                onClick={() => {
                    setShowForm(true)
                }}
            >
                +
            </button>
            <TaskFormModal
                show={showForm}
                handleClose={() => setShowForm(false)}
                addOrEditTask={addOrEditTask}
                initialValues={
                    taskToEdit != null
                        ? {
                            id: taskToEdit.id,
                            title: taskToEdit.title,
                            description: taskToEdit.description,
                        }
                        : undefined
                }
            />
        </div>
    );
};

export default App;
