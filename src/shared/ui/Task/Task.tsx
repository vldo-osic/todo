import { FC } from "react"
import { Button, Title, Wrapper,  } from "shared/styles"

export type TTask = {
  id: string
  title: string
  isDone: boolean
}

interface TaskProps {
  task: TTask,
  handlers: {
    deleteTask: (id: string) => void,
    toggleTask: (id: string) => void,
  }
}

export const Task: FC<TaskProps> = ({ task, handlers }) => {
  

  return (
    <Wrapper $display="flex" flex-direction="row">
      <Button
        onClick={() => handlers.deleteTask(task.id)}
      >
        x
      </Button>
      <Title>
        {task.title}
      </Title>
      <Button
        onClick={() => handlers.toggleTask(task.id)}>
        {task.isDone ? "✅" : "❌"}
      </Button>
    </Wrapper>
  )
}
