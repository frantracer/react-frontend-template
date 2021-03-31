import React from 'react';
import {Task} from "../../core/domain/Task";

interface TaskViewerProps {
    tasks: Task[]
}

const TaskViewer = (props: TaskViewerProps) => {
    return (
        <>
            {
                props.tasks.map(t =>
                    <h1>
                        {t.message}
                    </h1>)
            }
        </>
    );
};

export default TaskViewer;
