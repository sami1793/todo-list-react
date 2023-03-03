import { tasks } from "../../data/tasks"
import { Task } from "../task/task"

import style from './TaskList.module.css'

export const TasksList = () => {
  return (
    <div className={style.taskList}>
        {tasks.map((task)=>
            <Task key={task.id} task={task} />
        )}
    </div>
  )
}
