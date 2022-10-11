import React from 'react'
import { Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Favs from './pages/Favs';
import './global.css'

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/favs" element={<Favs/>} />
    </Routes>
  )
}

export default App
