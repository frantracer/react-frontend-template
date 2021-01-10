import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

class TaskController {
    repository: TaskRepository;

    constructor(repository: TaskRepository) {
        this.repository = repository;
    }

    getTasks(): Task[] {
        return this.repository.getTasks();
    }
}

export {TaskController};