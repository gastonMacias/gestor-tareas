import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskBoard from './components/taskBoard/TaskBoard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
