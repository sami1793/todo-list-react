import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Task } from './components/task/task'

function App() {

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Task />

    </div>
  )
}

export default App
