import { Task } from "../entities/Task"

interface TaskRepository {
    getTasks(): Task[];
    addTask(task: Task): any;
}

export type { TaskRepository };