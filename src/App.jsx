import React,{useState} from 'react'
import Header from './Components/Header'
import GetStarted from './Components/GetStarted/GetStarted'
import Navbar from './Components/Navbar'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'

function App() {
  const [page, setPage] = useState("header")
 
  return (
      <div>
        <Navbar setPage={setPage}/>
        {page === "header" && <Header/>}
        {page === "getStarted" && <GetStarted setPage={setPage}/>}
     </div>
  )
}

export default App