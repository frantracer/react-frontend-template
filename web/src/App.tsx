import React from 'react';
import './App.css';
import {TaskController} from "./core/application/TaskController";
import {InMemoryTaskRepository} from "./core/infrastructure/InMemoryTaskRepository";
import TaskViewer from "./web/components/TaskViewer";
import TaskAdder from "./web/components/TaskAdder";
import TaskProvider from "./web/contexts/TaskContext";

function App() {
    let taskRepository = new InMemoryTaskRepository();
    let taskController = new TaskController(taskRepository)

    return (
        <div className="App">
            <TaskProvider controller={taskController}>
                <TaskAdder />
                <TaskViewer />
            </TaskProvider>
        </div>
    );
}

export default App;
