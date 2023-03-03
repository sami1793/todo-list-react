import style from './Task.module.css'

export const Task = () => {
  return (
    <div className={style.taskItem}>
        <p className={style.taskName}>Limpiar cocinassssssssssssssssss</p>
        <button className={style.completedButton}><i className="fa-solid fa-check"></i></button>
        <button className={style.deletedButton}><i className="fa-solid fa-trash"></i></button>
    </div>
  )
}
