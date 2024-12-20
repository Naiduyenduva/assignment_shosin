import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'



const Page = () => {
  return (
    <div className='flex font-poppins'>
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default Page