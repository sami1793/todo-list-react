import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TasksList } from './components/tasksList/TaskList'

function App() {

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" name="task-name" id="task-name" maxlength="50"
      placeholder='Ingrese nueva tarea' />
      <TasksList />

    </div>
  )
}

export default App
