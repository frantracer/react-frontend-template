import React from 'react';
import {Task} from "../../core/entities/Task";

interface TaskViewerProps {
    tasks: Task[]
}

const TaskViewer = (props: TaskViewerProps) => {
    return (
        <>
            {
                props.tasks.map((t, index) =>
                    <h1 key={index}>
                        {t.message}
                    </h1>)
            }
        </>
    );
};

export default TaskViewer;
