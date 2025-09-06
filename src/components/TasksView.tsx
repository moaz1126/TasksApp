import TaskItem, { type Task, type TaskActions } from "./Task";
import styles from "../styles/tasksView.module.css";
import ManageTasks from "./ManageTasks";


type TaskViewProps = TaskActions & {
    data: Task[];
}

export default function TasksView({data, actions}: TaskViewProps) {
    return (
        <div className={styles.tasksView}>
            <div className={styles.tasksList}>
                {data.map(task => (
                    <TaskItem key={task.id} {...task} actions={actions} />
                ))}
            </div>
            <ManageTasks />
        </div>
    )
}