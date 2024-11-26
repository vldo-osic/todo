import React, { useId } from 'react'
import { TTask, Task } from 'shared/ui/Task'

const tasks: TTask[] = [
  {
    id: '1',
    title: 'Task 1',
    isDone: false
  },
  {
    id: '2',
    title: 'Task 2',
    isDone: false
  },
  {
    id: '3',
    title: 'Task 3',
    isDone: true
  }
]

export const TaskList = () => {
  const id = useId()
  
  const [tasksList, setTasksList] = React.useState<TTask[]>(tasks)

  function handleDeleteTask(id: string) {
    setTasksList(tasksList.filter((task) => task.id !== id));
  }
  function handleAddTask(title: string) {
    const newTask = {
      id: id,
      title: title,
      isDone: false
    }
    setTasksList([...tasksList, newTask])
  }
  function handleToggleTask(id: string) {
    setTasksList(tasksList.map((task) => {
      if (task.id === id) {
        return {
          ...task, isDone: !task.isDone
        }
      }
      return task
    }))
  }

  return (
    <ul>
      {
        tasksList.map((task) => 
          <Task 
            task={task} 
            handlers={{ 
              deleteTask: handleDeleteTask, 
              toggleTask: handleToggleTask 
            }} 
            key={task.id}
          />
        )
      }
    </ul>
  )
}
