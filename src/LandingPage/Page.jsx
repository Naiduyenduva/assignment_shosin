import React from 'react'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


const Page = () => {
  return (
    <div className='grid sm:flex font-poppins'>
        <Sidebar />
        <div>
          <Navbar />
          <Dashboard />
        </div>
    </div>
  )
}

export default Page