import React,{useState} from 'react'
import Header from './Components/Header'
import GetStarted from './Components/GetStarted/GetStarted'
import Navbar from './Components/Navbar'

function App() {
  const [page, setPage] = useState("header")
 
  return (
      <div>
      <Navbar setPage={setPage}/>
      {page === "header" && <Header/>}
      {page === "getStarted" && <GetStarted/>}
    </div>
  )
}

export default App