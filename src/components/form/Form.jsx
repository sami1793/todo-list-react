import { useState } from "react";

import { tasks } from "../../data/tasks"

import style from './Form.module.css'

export const Form = () => {
    const [taskInput, setTaskInput] = useState('');
    const [list, setList] = useState(tasks)
  return (
    <form className={style.form} onSubmit={(e)=>{
        e.preventDefault();
    }}>
        <input type="text" name="nombre" id="nombre"
        placeholder='Ingrese nueva tarea' 
        value={taskInput}
        onChange={(e)=>{
            setTaskInput(e.target.value)
        }}/>
        <button type="submit"
                onClick={(e)=>{
                    if(taskInput==='') {
                        console.log('Debes ingresar algo')
                        return
                    }
                    
                    const newId = list[list.length-1].id + 1
                    
                    const newTask = {
                        id: newId,
                        title:taskInput,
                        done:false
                    }

                    setTaskInput('')

                    setList([...list,newTask])

                    console.log(`Agrego ${newTask.id} ${newTask.title}`)
                    console.log(list)
                    
                }}>
                    Agregar
        </button>
    </form>
  )
}
