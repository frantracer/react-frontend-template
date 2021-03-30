import React, {FC} from 'react';
import {TasksContextType, TaskContext} from "../contexts/TaskContext";

interface TaskViewerProps {}

const TaskViewer: FC<TaskViewerProps> = () => {
    const { tasks } = React.useContext(TaskContext) as TasksContextType;

    return (
        <>
            {
                tasks.map(t =>
                    <h1>
                        {t.message}
                    </h1>)
            }
        </>
    );
};

export default TaskViewer;
