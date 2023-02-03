import React, { useState } from "react";
import "./App.css";
import { TasksList }       from "./components/TasksList";
import { TaskFormModal }   from "./components/TaskFormModal";
import { Header }          from "./components/Header";
import { data }            from "./data/tasks";
import { TaskType }        from "./models/TaskType";


const App = () => {
  const title = "To do list";
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false)
  const [tasks, setTasks] = useState<TaskType[]>(data)


  const updateTaskState = (taskId: number) => {
    const updatedTasks: TaskType[] = tasks.map((task) => {
      if (task.id === taskId) {
        task.done? task.done = false : task.done = true;
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    const form = event.currentTarget
    const formTitle: string = form.title.value
    const formDesc: string = form.description.value

    if ( taskToEditId ) {
      let taskToBeEdited = tasks.find(task => task.id === taskToEditId);
      if ( taskToBeEdited ) {
        taskToBeEdited.title = formTitle
        taskToBeEdited.description = formDesc
        setTasks(tasks)
      }
    } else {
      const newTask: TaskType = {
        id: tasks[0]? tasks[tasks.length - 1].id + 1: 1,
        title: formTitle,
        description: formDesc,
        done: false
      }
      setTasks([...tasks, newTask])
    }

    closeForm()
  };

  const editTask = (taskId: number) => {
    const editTask = tasks.find((task: TaskType) => task.id === taskId)
    if ( editTask ) {setTaskToEdit(editTask)}
    setShowForm(true)
  };

  const deleteTask = (taskId: number): void => {
    setTasks(tasks.filter(task => task.id !== taskId))
  };

  function closeForm(): void {
    setShowForm(false)
    if ( taskToEdit ) {
      setTaskToEdit(null)
    }
  }

  return (
      <div className="main">
        <Header titre={ title }/>

        <TasksList list={ tasks } deleteTask={ deleteTask } editTask={ editTask } updateTaskState={ updateTaskState }/>
        <button
            className="add-task-btn"
            onClick={ () => setShowForm(true)
            }
        >
          +
        </button>
        <TaskFormModal
            show={ showForm }
            handleClose={ () => closeForm() }
            addOrEditTask={ addOrEditTask }
            initialValues={
              taskToEdit != null
              ? {
                    id: taskToEdit.id,
                    title: taskToEdit.title,
                    description: taskToEdit.description
                  }
              : undefined
            }
        />
      </div>
  );
};

export default App;
