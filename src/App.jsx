import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TasksList } from './components/tasksList/TaskList'
import { Form } from './components/form/Form'

function App() {

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form />
      <TasksList />

    </div>
  )
}

export default App
