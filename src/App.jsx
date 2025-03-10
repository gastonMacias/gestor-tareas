import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskBoard from './components/taskBoard/TaskBoard'


function App({ toggleTheme }) {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskBoard toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
