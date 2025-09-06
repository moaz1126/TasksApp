import { type TaskActions } from "../components/Task"

interface TaskActionsType extends TaskActions {
    handleNewTask: (_: boolean | undefined, formData: FormData) => Promise<boolean>;
} 

class TaskActionsClass implements TaskActionsType {
    handleNewTask(_: boolean | undefined, formData: FormData): Promise<boolean> {
        const tasksTitle = formData.get("title") as string;
        if (tasksTitle.length === 0) return Promise.resolve(false);

        setTasks(prevTasks => {
            const newTasks = [...prevTasks, { id: prevTasks.length + 1, title: tasksTitle, completed: false }];
            localStorage.setItem("Tasks", JSON.stringify(newTasks));
            return newTasks;
        });

        console.log(tasksTitle);
        return Promise.resolve(true);
    }
    actions: { edit: (id: number) => void; delete: (id: number) => void; };
}
