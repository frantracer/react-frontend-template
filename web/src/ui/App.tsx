import React, {useState} from 'react';
import './App.css';
import {TaskController} from "../core/application/TaskController";
import {InMemoryTaskRepository} from "../core/infrastructure/InMemoryTaskRepository";
import TaskViewer from "./components/TaskViewer";
import TaskAdder from "./components/TaskAdder";
import {Task} from "../core/domain/Task";

function App() {
    let taskRepository = new InMemoryTaskRepository();
    let taskController = new TaskController(taskRepository)

    const [tasks, setTasks] = useState<Task[]>(taskController.getTasks());

    const onTaskAdded = (task: Task) => {
        setTasks([...tasks, task]);
    }

    return (
        <div className="App">
            <TaskAdder onTaskAdded={onTaskAdded}/>
            <TaskViewer tasks={tasks}/>
        </div>
    );
}

export default App;
