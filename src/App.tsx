import { useState } from 'react'
import './App.css'
import TasksView from './components/TasksView'
import ThemeSwitch from './components/ThemeSwitch'
import ToDoForm from './components/ToDoForm'
import { type Task } from './components/Task'

function App() {


  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("Tasks") || "[]"))

  function handleNewTask(_: boolean | undefined, formData: FormData): Promise<boolean> {
    const tasksTitle = formData.get("title") as string;
    if (tasksTitle.length === 0) { return Promise.resolve(false) }
    setTasks(prevTasks => {
      const newTasks = [...prevTasks, { id: prevTasks.length + 1, title: tasksTitle, completed: false }]
      localStorage.setItem("Tasks", JSON.stringify(newTasks))
      return newTasks;
    })
    console.log(tasksTitle);
    return Promise.resolve(true);
  }

  return (
    <>
      <nav>
        <h1>T O D O</h1>
        <ThemeSwitch />
      </nav>
      <main>
        <ToDoForm handler={handleNewTask} />
        <TasksView data={tasks} />
      </main>
      <footer></footer>
    </>
  )
}

export default App
