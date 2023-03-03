import style from './Task.module.css'

export const Task = ({task}) => {
    const {id, title, done} = task;
    const taskStyle = {textDecoration : "line-through"}
  return (
    <div className={style.taskItem}>
        <p className={style.taskName} style={done? taskStyle : {} }>{title}</p>
        <button className={style.completedButton}><i className="fa-solid fa-check"></i></button>
        <button className={style.deletedButton}><i className="fa-solid fa-trash"></i></button>
    </div>
  )
}
