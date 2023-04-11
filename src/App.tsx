import { useEffect, useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const LOCAL_STORAGE_KEY = "todo:savedTasks"

export interface iTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [ tasks, setTasks ] = useState<iTask[]>([])

  const loadSavedTasks = () => {
     const saved = localStorage.getItem(LOCAL_STORAGE_KEY)

     if(saved) {
      setTasks(JSON.parse(saved))
     }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  const setTasksAndASave = (newTasks: iTask[]) => {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  const addTask = (taskTitle: string) => {
    setTasksAndASave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  const deleteTaskById = (taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasksAndASave(newTasks)
  }

  const toggleTaskCompletedById = (taskId: string) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })

    setTasksAndASave(newTasks)
  }

  return (
    <div className="App">
      <Header onAddTask={ addTask } />
      <Tasks tasks={ tasks } onDelete={ deleteTaskById } onComplete={ toggleTaskCompletedById } />
    </div>
  )
}

export default App
