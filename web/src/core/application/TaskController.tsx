import { Task } from "../domain/Task";
import { TaskRepository } from "./TaskRepository";

interface ITaskController {
    getTasks(): Task[]
    addTask(task: Task): any
}

class TaskController implements ITaskController {
    repository: TaskRepository;

    constructor(repository: TaskRepository) {
        this.repository = repository;
    }

    getTasks(): Task[] {
        return this.repository.getTasks();
    }

    addTask(task: Task): any {
        this.repository.addTask(task)
    }
}

export {TaskController};
