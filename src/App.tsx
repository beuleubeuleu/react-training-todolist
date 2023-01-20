import React, {useState} from "react";
import "./App.css";
import {TasksList} from "./components/TasksList";
import {TaskFormModal} from "./components/TaskFormModal";
import {Header} from "./components/Header";
import {data} from "./data/tasks";
import {TaskType} from "./models/TaskType";


const App = () => {
    const title = "To do list";
    const taskToEdit: any = null;
    const [showForm, setShowForm] = useState(false)
    const [tasks, setTasks] = useState(data)


    const updateTaskState = (taskId: number) => {
        console.error("I need to be implemented");
    };

    const addOrEditTask = (event: any, taskToEditId?: number) => {
        event.preventDefault();
        const form = event.currentTarget
        const formTitle: string = form.title.value
        const formDesc: string = form.description.value
        const newTask: TaskType = {
            id: tasks[tasks.length-1].id +1,
            title: formTitle,
            description: formDesc,
            done: false
        }
        setTasks([...tasks, newTask])
        setShowForm(false)
    };

    const editTask = (taskId: number) => {
        console.error("I need to be implemented");
    };

    const deleteTask = (taskId: number): void => {
        setTasks(tasks.filter(task => task.id !== taskId))
    };

    return (
        <div className="main">
            <Header titre={title}/>

            <TasksList list={tasks} deleteTask={deleteTask}/>
            <button
                className="add-task-btn"
                onClick={() => setShowForm(true)
                }
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
