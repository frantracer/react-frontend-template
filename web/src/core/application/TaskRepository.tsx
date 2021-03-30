import { Task } from "../domain/Task"

interface TaskRepository {
    getTasks(): Task[];
    addTask(task: Task): any;
}

export type { TaskRepository };