import React from 'react';
import './App.css';
import {TaskController} from "./core/application/TaskController";
import {InMemoryTaskRepository} from "./core/infrastructure/InMemoryTaskRepository";

function App() {
  let taskRepository = new InMemoryTaskRepository();
  let taskController = new TaskController(taskRepository)

  return (
    <div className="App">
      {
        taskController.getTasks().map(t =>
            <h1>
              {t.message}
            </h1>)
      }
    </div>
  );
}

export default App;
