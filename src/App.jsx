import React from 'react'
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import TaskA from './pages/TaskA';
import TaskB from './pages/TaskB';
import TaskC from './pages/TaskC';
const App = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<TaskA/>}/>
            <Route path="/taskb" element={<TaskB/>}/>
            <Route path="/taskc" element={<TaskC/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
