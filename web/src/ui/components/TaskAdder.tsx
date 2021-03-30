import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import {Task} from "../../core/domain/Task";
import {TaskContext, TasksContextType} from "../contexts/TaskContext";

interface TaskAdderProps {}

const TaskAdder: FC<TaskAdderProps> = () => {
    const { saveTask } = React.useContext(TaskContext) as TasksContextType;

    let task = new Task("hello", new Date())
    return (
        <>
            {
                <Button variant="primary" onClick={() => saveTask(task)}>Add task</Button>
            }
        </>
    );
};

export default TaskAdder;