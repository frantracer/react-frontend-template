import React from 'react';
import Button from 'react-bootstrap/Button';
import {Task} from "../../core/entities/Task";

interface TaskAdderProps {
    onTaskAdded: (t: Task) => void
}

const TaskAdder = (props: TaskAdderProps) => {
    let task = new Task("hello", new Date())
    return (
        <>
            {
                <Button variant="primary" onClick={() => props.onTaskAdded(task)}>Add task</Button>
            }
        </>
    );
};

export default TaskAdder;