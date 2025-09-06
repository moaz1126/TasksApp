import { useActionState } from "react";
import styles from "../styles/toDoForm.module.css";
import CheckboxInput from "./CheckboxInput";

export type ToDoFormProps = {
  handler: (prevState: boolean | undefined, formData: FormData) => Promise<boolean>;
};

export default function ToDoForm({ handler }: ToDoFormProps) {
  const [state, formAction] = useActionState(handler, undefined);

  return (
        <form action={formAction} className={`${styles.form} ${state === true ? styles.success : ''} ${state === false ? styles.error : ''}`}>
            <CheckboxInput name="" disabled />  
            <input
                type="text"
                placeholder="Read books"
                autoFocus
                className={`${styles.input}`}
                aria-label='Add a new todo'
                name="title"
            />
            <button type="submit" className={`${styles.submit}`}>+</button>
        </form>
  );
}