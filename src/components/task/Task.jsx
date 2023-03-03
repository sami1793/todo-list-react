import { useState } from 'react';
import style from './Task.module.css'

export const Task = ({task}) => {
    const {id, title, done} = task;
    const [doneTask, setDoneTask] = useState(false);
    const taskStyle = {textDecoration : "line-through"}
  return (
    <div className={style.taskItem}>
        <p className={style.taskName} style={done? taskStyle : {} }>{title}</p>
        <button className={style.completedButton} onClick={(doneTask)=>{
          setDoneTask(!doneTask)
        }}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button className={style.deletedButton}>
          <i className="fa-solid fa-trash"></i>
        </button>
    </div>
  )
}
