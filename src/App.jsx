import React,{useState} from 'react'
import Header from './Components/Header'
import GetStarted from './Components/GetStarted/GetStarted'
import Navbar from './Components/Navbar'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import Profile from './Components/Profile'

function App() {
  const [page, setPage] = useState("header")
  const renderContent = () => {
    switch(setPage) {
      case 'header':
        return <Header />;
      case 'profile':
        return <Profile />;
      default:
        return <Header />;
    }
  }
 
  return (
      <div>
        <Navbar setPage={setPage}/>
        {page === "header" && <Header/>}
        {page === "profile" && <Profile/>}
        {page === "getStarted" && <GetStarted setPage={setPage}/>}
     </div>
  )
}

export default App