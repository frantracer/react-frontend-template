import { Task } from "./Task"

interface TaskRepository {
    getTasks(): Task[];
}

export type { TaskRepository };