import React, {useState, useEffect} from 'react'
import { Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Favs from './pages/Favs';
import {propData} from './interfaces/index'
import './global.css'

const App: React.FC = () => {

  const [propData, setPropData] = useState<propData[] | null>(null)

  useEffect(() => {
    import('./data/fakePropData.json').then(jsonfile => {
      setPropData(jsonfile.props)
    })
  },[])

  return (
    <Routes>
      <Route path="/" element={<Dashboard propData={propData} />} />
      <Route path="/favs" element={<Favs propData={propData}/>} />
    </Routes>
  )
}

export default App
