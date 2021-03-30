import {TaskRepository} from "../application/TaskRepository";
import {Task} from "../domain/Task";

class InMemoryTaskRepository implements TaskRepository {
    tasks: Task[];

    constructor() {
        let task1 = new Task("Update task message", new Date());
        let task2 = new Task("Show task creation date", new Date());
        this.tasks = [task1, task2]
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task): any {
        this.tasks.push(task)
    }

}

export {InMemoryTaskRepository};
