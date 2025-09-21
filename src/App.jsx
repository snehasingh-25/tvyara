import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import TaskA from './assets/pages/TaskA';
import TaskB from './assets/pages/TaskB';
import TaskC from './assets/pages/TaskC';
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
