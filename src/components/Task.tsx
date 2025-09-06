import styles from "../styles/task.module.css";
import CheckboxInput from "./CheckboxInput";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type TaskProps = Task & {
  actions: {
    edit: (id: number) => void;
    delete: (id: number) => void;
  }
};

export type TaskActions = Omit<TaskProps, keyof Task>;

export default function TaskItem({ id, title, completed, actions }: TaskProps) {
    return (
    <div className={`${styles.task} ${completed ? styles.completed : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <CheckboxInput 
                    name="task-checkbox"
                    checked={completed}
                    handleChange={() => actions.edit(id)}
                />
                <span className={styles.title}>{title}</span>
            </div>
            <button 
                className={styles.deleteButton} 
                onClick={() => actions.delete(id)}
                aria-label={`Delete task ${title}`}>
            </button>
        </div>
    );
}