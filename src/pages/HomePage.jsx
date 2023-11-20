import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div style={{width:"100%",height:"calc(100vh - 100px)", display:"flex",alignItems:"flex-start"}}>
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default HomePage
