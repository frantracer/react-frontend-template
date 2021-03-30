import React, {FC, ReactNode, useEffect, useState} from "react";
import {Task} from "../../core/domain/Task";
import {TaskController} from "../../core/application/TaskController";

interface TaskContextProps {
    controller: TaskController;
    children: ReactNode
}

export type TasksContextType = {
    tasks: Task[]
    saveTask: (task: Task) => void
}

export const TaskContext = React.createContext<TasksContextType | null>(null);

const TaskProvider: FC<TaskContextProps> = (props) => {
    const {children, controller} = props
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {setTasks(controller.getTasks())}, [controller])

    const saveTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    return (
        <TaskContext.Provider value={{ tasks, saveTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;