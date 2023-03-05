import { useState } from 'react';

import { tasks } from "../../data/tasks"

import style from './Task.module.css'

export const Task = ({task}) => {
    const {id, title, done} = task;
    const [doneTask, setDoneTask] = useState(done);

    const taskStyle = {textDecoration : "line-through"}


    function handleDone() {
    setDoneTask(!doneTask);
    console.log(done);
    }

  return (
    <div className={style.taskItem}>
        <button className={doneTask?style.completedButton:style.completedButtonNoCheck} onClick={handleDone} >
          <span><i className="fa-solid fa-check"></i></span>
        </button>
        
        <p className={style.taskName} style={doneTask? taskStyle : {} }>{title}</p>        

        <button className={style.deletedButton}>
          <span><i className="fa-solid fa-trash"></i></span>
        </button>

    </div>
  )
}
